import React, { useContext, useEffect } from "react";
import { Loader } from "../Loader/Loader";
import * as S from "./Home.styles";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import short_session_light from "../../assets/short_session_light.svg";
import short_session_dark from "../../assets/short_session_dark.svg";
import available_friday from "../../assets/available_friday.svg";
import weekly_session from "../../assets/weekly_session.svg";
import { ThemeContext } from "styled-components";
import { useClientStore } from "../../store/client.store";

export const Home = () => {
  const { user, setUser } = useClientStore();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

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
          <S.LogoContainer>
            <S.Logo src={logo} alt="Aimful Logo" />
          </S.LogoContainer>
          <S.CardsContainer>
            <S.Card onClick={() => navigate("/daily-reflection")}>
              <S.CardTitleContainer>
                <h2>Short Session</h2>
                <S.CardLogo
                  src={
                    theme && theme.mode === "light"
                      ? short_session_light
                      : short_session_dark
                  }
                  alt="Short Session"
                />
              </S.CardTitleContainer>
              <S.Notes>
                This is a focused and concise coaching session, designed
                specifically for you to work intensively on a particular skill
                or attribute you wish to improve.
              </S.Notes>
              <S.Duration>Duration 5-10mins</S.Duration>
            </S.Card>
            <S.Card
              disabled={!user.weekly_open}
              onClick={() => user.weekly_open && navigate("/weekly-reflection")}
            >
              <S.CardTitleContainer>
                <h2>Weekly Session</h2>
                <S.CardLogo src={weekly_session} alt="Weekly Session" />
              </S.CardTitleContainer>
              <S.Notes>
                In these sessions, we'll take a step back to review your
                progress over the past week. We’ll assess how well you're
                advancing towards the goals we've set in previous sessions.
                Additionally, we’ll use this time to continue developing the
                skills and attributes you're most interested in improving.
              </S.Notes>
              <S.Duration> Duration 15-20mins</S.Duration>
              {!user.weekly_open && (
                <S.Overlay>
                  <S.OverlayLogo
                    src={available_friday}
                    alt="Available Friday"
                  />
                  <h2>Available Friday</h2>
                </S.Overlay>
              )}
              {user.weekly_completed && (
                <S.Overlay>
                  <h2>Already completed</h2>
                </S.Overlay>
              )}
            </S.Card>
          </S.CardsContainer>
        </S.Container>
      ) : (
        <S.Container>
          <S.WelcomeContainer>
            <S.Title>Welcome to...</S.Title>
            <S.IntroLogo src={logo} alt="Aimful Logo" />
            <S.StartButtonContainer>
              <S.Description>Ready to begin our first session?</S.Description>
              <S.StartButton onClick={() => navigate("/introduction")}>
                <S.ButtonTitle>Start Session</S.ButtonTitle>
              </S.StartButton>
            </S.StartButtonContainer>
          </S.WelcomeContainer>
        </S.Container>
      )}
    </React.Fragment>
  );
};
