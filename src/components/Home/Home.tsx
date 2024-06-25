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
            Daily Reflection
          </S.Card>

          <S.Card
            disabled={!user.allow_weekly}
            onClick={() => user.allow_weekly && navigate("/weekly-reflection")}
          >
            Weekly Reflection
            {!user.weekly_open && <S.Notes>Open on Friday</S.Notes>}
            {user.weekly_completed && <S.Notes>Already completed</S.Notes>}
          </S.Card>
        </S.Container>
      ) : (
        <Introduction />
      )}
    </React.Fragment>
  );
};
