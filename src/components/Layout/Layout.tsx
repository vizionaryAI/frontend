import * as S from "./Layout.styles.ts";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return <S.Layout>{children}</S.Layout>;
};
