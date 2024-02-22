import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Unauthorized.styles";

export const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/unauthorized");
  }, [navigate]);

  return (
    <>
      <S.Dialog>Unauthorized</S.Dialog>
      <S.Description>
        Unfortunately, this account is not authorized to use, please contact the
        administrator!
      </S.Description>
    </>
  );
};
