import React, { useState, useRef, useEffect } from "react";
import { getVoiceMessage, sendVoiceMessage } from "../../api/chatbot.api";
import * as S from "./VoiceMessage.styles";
import { RecordingState } from "../../types/chatbot";
import { RecordingAnimation } from "./RecordingAnimation";

type Props = {
  voiceApi: string;
  firstUse: boolean;
  setFirstUse: (value: boolean) => void;
};

const AudioRecorder: React.FC<Props> = ({
  voiceApi,
  firstUse,
  setFirstUse,
}) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingState, setRecordingState] = useState<RecordingState>(
    RecordingState.None
  );
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const [sessionIsStarted, setSessionIsStarted] = useState(false);

  const handleStartStopRecording = async () => {
    if (isRecording) {
      // Stop recording
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
      setRecordingState(RecordingState.Waiting);
      setFirstUse(false); //user profile TODO!!!!
    } else {
      // Start recording
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.ondataavailable = (event: BlobEvent) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        audioChunksRef.current = []; // Clear chunks
        stream.getTracks().forEach((track) => track.stop()); // Stop all tracks

        // Send the voice message
        setRecordingState(RecordingState.Waiting);
        try {
          const response = await sendVoiceMessage(audioBlob, voiceApi);

          const returnedBlobUrl = URL.createObjectURL(response.data);
          if (audioPlayerRef.current) {
            audioPlayerRef.current.src = returnedBlobUrl;
            setRecordingState(RecordingState.Listening);
            audioPlayerRef.current.play();
          }
        } catch (error) {
          console.error("Failed to send voice message", error);
          setRecordingState(RecordingState.None);
        }
      };
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingState(RecordingState.Recording);
    }
  };

  useEffect(() => {
    if (audioPlayerRef.current) {
      const handleAudioEnded = () => {
        setRecordingState(RecordingState.None);
      };

      const handleAudioPlay = () => {
        setRecordingState(RecordingState.Listening);
      };

      audioPlayerRef.current.addEventListener("ended", handleAudioEnded);
      audioPlayerRef.current.addEventListener("play", handleAudioPlay);

      return () => {
        if (audioPlayerRef.current) {
          audioPlayerRef.current.removeEventListener("ended", handleAudioEnded);
          audioPlayerRef.current.removeEventListener("play", handleAudioPlay);
        }
      };
    }
  }, []);

  const handleStartSession = async () => {
    setSessionIsStarted(true);

    // Send the voice message
    setRecordingState(RecordingState.Waiting);
    try {
      const response = await getVoiceMessage(voiceApi);

      const returnedBlobUrl = URL.createObjectURL(response.data);
      if (audioPlayerRef.current) {
        audioPlayerRef.current.src = returnedBlobUrl;
        setRecordingState(RecordingState.Listening);

        audioPlayerRef.current.play();

        audioPlayerRef.current.onended = () => {
          setRecordingState(RecordingState.None);
        };
      }
    } catch (error) {
      console.error("Failed to send voice message", error);
      setRecordingState(RecordingState.None);
    }
  };

  const renderUIText = () => {
    if (firstUse && recordingState === RecordingState.None) {
      return <S.StatusText>Press when Speaking</S.StatusText>;
    } else if (firstUse && recordingState === RecordingState.Recording) {
      return <S.StatusText>Press when you've finished Speaking'</S.StatusText>;
    }
    return <S.StatusText>{recordingState}</S.StatusText>;
  };

  return (
    <S.ChatContainer>
      {sessionIsStarted ? (
        <>
          <S.Button
            onClick={handleStartStopRecording}
            disabled={
              recordingState !== RecordingState.None &&
              recordingState !== RecordingState.Recording
            }
          >
            {/* Check is first use, before recording */}
            {firstUse && recordingState === RecordingState.None && (
              <RecordingAnimation
                animation={RecordingState.HelpGuideAnimation}
              />
            )}

            {/* Check is first use and is recording */}
            {firstUse && recordingState === RecordingState.Recording ? (
              <S.AnimationContainer>
                <RecordingAnimation animation={RecordingState.Recording} />
                <RecordingAnimation
                  animation={RecordingState.HelpGuideAnimation}
                />
              </S.AnimationContainer>
            ) : (
              <RecordingAnimation animation={recordingState} />
            )}
          </S.Button>
          <audio ref={audioPlayerRef} style={{ display: "none" }}></audio>
          {renderUIText()}
        </>
      ) : (
        <>
          <S.StartButton onClick={handleStartSession}>
            <S.StatusText>Start Session</S.StatusText>
          </S.StartButton>
        </>
      )}
    </S.ChatContainer>
  );
};

export default AudioRecorder;
