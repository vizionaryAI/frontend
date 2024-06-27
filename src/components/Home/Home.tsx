import React, { useEffect } from "react";
import { Loader } from "../Loader/Loader";
import * as S from "./Home.styles";
import { useNavigate } from "react-router-dom";
import { useClientStore } from "../../store/client.store";
import { Introduction } from "../Introduction/Introduction";

export const Home = () => {
  const { user, setUser } = useClientStore();
  const navigate = useNavigate();

  useEffect(() => {
    setUser();
  }, []);

  if (user.name === "") {
    return <Loader />;
  }

  return (
    <React.Fragment>
      {user.introduction_completed ? (
        <S.Container>
          <S.Card onClick={() => navigate("/daily-reflection")}>
            <h2>Short Session</h2>
            <S.Notes>
              This is a focused and concise coaching session, designed
              specifically for you to work intensively on a particular skill or
              attribute you wish to improve.
            </S.Notes>
            <S.Duration>Duration 5-10mins</S.Duration>
          </S.Card>
          <S.Card
            disabled={!user.allow_weekly}
            onClick={() => user.allow_weekly && navigate("/weekly-reflection")}
          >
            <h2>Weekly Session</h2>
            <S.Notes>
              In these sessions, we'll take a step back to review your progress
              over the past week. We’ll assess how well you're advancing towards
              the goals we've set in previous sessions. Additionally, we’ll use
              this time to continue developing the skills and attributes you're
              most interested in improving.
            </S.Notes>
            <S.Duration> Duration 15-20mins</S.Duration>
            {!user.weekly_open && (
              <S.Overlay>
                <h2>Open on Friday</h2>
              </S.Overlay>
            )}
            {user.weekly_completed && (
              <S.Overlay>
                <h2>Already completed</h2>
              </S.Overlay>
            )}
          </S.Card>
        </S.Container>
      ) : (
        <Introduction />
      )}
    </React.Fragment>
  );
};
