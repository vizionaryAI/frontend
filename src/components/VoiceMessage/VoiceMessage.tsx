import React, { useState, useRef, useEffect } from "react";
import { getVoiceMessage, sendVoiceMessage } from "../../api/chatbot.api";
import * as S from "./VoiceMessage.styles";
import { RecordingState } from "../../types/chatbot";
import { RecordingAnimation } from "./RecordingAnimation";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

type Props = {
  conversationType: string;
  firstUse: boolean;
  sessionIsStarted: boolean;
  updateUserProfile: () => void;
  setSessionIsStarted: (value: boolean) => void;
  deleteChat: (message: string, conversationType: string) => void;
};

const AudioRecorder: React.FC<Props> = ({
  conversationType,
  firstUse,
  sessionIsStarted,
  setSessionIsStarted,
  updateUserProfile,
  deleteChat,
}) => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingState, setRecordingState] = useState<RecordingState>(
    RecordingState.None
  );
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  const handleStartStopRecording = async () => {
    if (isRecording) {
      // Stop recording
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
      setRecordingState(RecordingState.Waiting);
      updateUserProfile();
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
          const response = await sendVoiceMessage(audioBlob, conversationType);

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
      const response = await getVoiceMessage(conversationType);

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
      return <S.StatusText>Press When you have Finished speaking</S.StatusText>;
    }
  };

  const handleEndConversation = () => {
    deleteChat(
      "goodbye (skip to session recap and goodbye step)",
      conversationType
    );

    navigate("/home");
  };

  return (
    <S.ChatContainer>
      {sessionIsStarted ? (
        <>
          <S.RecorderButtonContainer>
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
          </S.RecorderButtonContainer>
          <audio ref={audioPlayerRef} style={{ display: "none" }}></audio>
          {renderUIText()}
          <S.EndConversationButtonContainer>
            <Button onClick={handleEndConversation}>End Conversation</Button>
          </S.EndConversationButtonContainer>
        </>
      ) : (
        <>
          <S.WelcomeContainer>
            <S.StartButton onClick={handleStartSession}>
              <S.ButtonTitle>Start Session</S.ButtonTitle>
            </S.StartButton>
          </S.WelcomeContainer>
        </>
      )}
    </S.ChatContainer>
  );
};

export default AudioRecorder;
