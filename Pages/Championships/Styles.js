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

export const Title = styled.h2`
  color: ${colors.font.primary};
  font-family: ${fonts.Cabin};
  font-size: 3rem;
  margin: 0;
  padding-top: 2rem;
  border-bottom: 2px solid ${colors.font.title};
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 40%;
  align-self: flex-start;

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
export const Paragraph = styled.p`
  align-items: center;
  justify-content: center;
  display: flex;
`;
