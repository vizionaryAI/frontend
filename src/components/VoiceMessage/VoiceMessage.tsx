import React, { useState, useRef, useEffect } from "react";
import { getVoiceMessage, sendVoiceMessage } from "../../api/chatbot.api";
import * as S from "./VoiceMessage.styles";
import { RecordingState } from "../../types/chatbot";
import { RecordingAnimation } from "./RecordingAnimation";
import { useNavigate } from "react-router-dom";

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
      try {
        // Start recording
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });

        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = []; // Reset audio chunks

        mediaRecorder.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorder.onstop = async () => {
          if (audioChunksRef.current.length === 0) {
            console.error("No audio data available");
            return;
          }

          // Determine the audio type from the first chunk
          const audioType = audioChunksRef.current[0].type;
          const audioBlob = new Blob(audioChunksRef.current, {
            type: audioType,
          });

          audioChunksRef.current = []; // Clear chunks
          stream.getTracks().forEach((track) => track.stop()); // Stop all tracks

          //================================================================================================
          // Create a URL for the recorded audio and play it
          // const audioUrl = URL.createObjectURL(audioBlob);

          // if (audioPlayerRef.current) {
          //   audioPlayerRef.current.src = audioUrl;
          //   audioPlayerRef.current.load(); // Ensure the new source is loaded
          //   console.log("Playing audio...");
          //   audioPlayerRef.current.play().catch((error) => {
          //     console.error("Error playing audio:", error);
          //   });
          // } else {
          //   console.error("Audio player reference is null");
          // }

          //================================================================================================
          setRecordingState(RecordingState.Waiting);
          const response = await sendVoiceMessage(audioBlob, conversationType);

          const returnedBlobUrl = URL.createObjectURL(response.data);
          if (audioPlayerRef.current) {
            audioPlayerRef.current.src = returnedBlobUrl;
            setRecordingState(RecordingState.Listening);
            audioPlayerRef.current.play();
          }
          //================================================================================================

          setRecordingState(RecordingState.None);
        };

        mediaRecorder.start();
        setIsRecording(true);
        setRecordingState(RecordingState.Recording);
      } catch (error) {
        console.error("Error accessing microphone", error);
      }
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
            <S.VoiceButton
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
            </S.VoiceButton>
          </S.RecorderButtonContainer>
          <audio ref={audioPlayerRef} style={{ display: "none" }}></audio>
          {renderUIText()}
          <S.EndConversationButtonContainer>
            <S.EndConversationButton onClick={handleEndConversation}>
              End Conversation
            </S.EndConversationButton>
          </S.EndConversationButtonContainer>
        </>
      ) : (
        <>
          <S.WelcomeContainer>
            <S.StartButton onClick={handleStartSession}>
              <S.ButtonTitle>
                {conversationType === "introduction"
                  ? "Start Voice Chat"
                  : "Start Session"}
              </S.ButtonTitle>
            </S.StartButton>
          </S.WelcomeContainer>
        </>
      )}
    </S.ChatContainer>
  );
};

export default AudioRecorder;
