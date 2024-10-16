import {
  Title,
  Container,
  LargerImage,
  SmallerImage,
  Column,
  Section,
  Paragraph,
} from "./Styles";
import Lasc from "../../assets/Lasc.svg";
import LascMembers from "../../assets/LascMembers.svg";
import CubeDesign from "../../assets/CubeDesign.svg";
import Working from "../../assets/Working.svg";

export default function Achievements() {
  return (
    <Container>
      <Section>
        <Column>
          <Title>Cube Design</Title>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <LargerImage src={CubeDesign} alt="Cube Design Imagem" />
        </Column>
        <SmallerImage src={CubeDesign} alt="Cube Design Imagem" />
      </Section>

      <Section>
        <SmallerImage src={Working} alt="Trabalhando Imagem" />
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
          <LargerImage src={Working} alt="Trabalhando Imagem" />
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
          <LargerImage src={Lasc} alt="Lasc Imagem" />
        </Column>
        <SmallerImage src={Lasc} alt="Lasc Imagem" />
      </Section>

      <Section>
        <SmallerImage src={LascMembers} alt="Membros na Lasc Imagem" />
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
          <LargerImage src={LascMembers} alt="Membros na Lasc Imagem" />
        </Column>
      </Section>
    </Container>
  );
}
