import {
  Title,
  Container,
  LargerImage,
  SmallerImage,
  Column,
  Section,
  Paragraph,
} from "./Styles";
import Horizon from "../../assets/Horizon.svg";
import HorizonMembers from "../../assets/HorizonMembers.svg";
import Champions from "../../assets/Champions.svg";
import ChampionsAgain from "../../assets/ChampionsAgain.svg";

export default function Championships() {
  return (
    <Container>
      <Section>
        <Column>
          <Title>Cube Design</Title>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <LargerImage src={Champions} alt="Campeoes Imagem" />
        </Column>
        <SmallerImage src={Champions} alt="Campeoes Imagem" />
      </Section>

      <Section>
        <SmallerImage src={ChampionsAgain} alt="Campeoes de novo Imagem" />
        <Column>
          <Paragraph>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <LargerImage src={ChampionsAgain} alt="Campeoes de novo Imagem" />
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>LASC</Title>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <LargerImage src={Horizon} alt="Horizon Imagem" />
        </Column>
        <SmallerImage src={Horizon} alt="Horizon Imagem" />
      </Section>

      <Section>
        <SmallerImage src={HorizonMembers} alt="MembrosHorizon Imagem" />
        <Column>
          <Paragraph>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Paragraph>
          <LargerImage src={HorizonMembers} alt="MembrosHorizon Imagem" />
        </Column>
      </Section>
    </Container>
  );
}
