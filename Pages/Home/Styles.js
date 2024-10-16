import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";

export const Container = styled.div`
  font-size: 1.2rem;
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.font.primary};
  gap: 1rem;
  margin: 0 auto;
  position: relative;
`;
export const FirstImage = styled.img`
  /* max-width: 100%;
  margin-top: 0; */
  /* padding: 0; */
  /* object-fit: cover; */
  width: 100vw;
  margin-top: 2rem;
`;

export const LargerImage = styled.img`
  width: 100%;
  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;
export const SmallerImage = styled.img`
  max-width: 35%;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: ${colors.font.terciary};
  font-family: ${fonts.Exo2};
  font-size: 5rem;
  text-align: center;
  margin: 0;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const SubTitle = styled.h2`
  color: ${colors.font.primary};
  font-family: ${fonts.Cabin};
  font-size: 2rem;
  margin: 0;
  padding-top: 2rem;
  /* border-bottom: 2px solid ${colors.font.title}; */
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 40%;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 80%;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0 auto;
  }
`;
export const SecondSection = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.Cabin};
  color: ${colors.font.primary};
  background-color: ${colors.font.terciary};
  border-radius: 2rem;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer; /* Altera o cursor ao passar sobre o botão */

  /* Efeito ao passar o cursor sobre o botão */
  &:hover {
    background-color: ${colors.font
      .terciaryLight}; /* Nova cor de fundo ao passar o cursor */
    transform: translateY(-5px); /* Desloca o botão para cima */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ao redor do botão */
  }

  /* Efeito de transição suave */
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.2s ease;
`;
