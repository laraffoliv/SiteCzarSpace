import styled from "styled-components";
import { colors, fonts } from "../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  height: 100%;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 10rem;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const StyledLink = styled.a`
  color: #fff; /* Cor do texto padrão */
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none; /* Remove sublinhado */

  &:hover {
    color: ${colors.font.terciary}; /* Cor ao passar o mouse */
  }
`;
