import {
  Title,
  Container,
  LargerImage,
  SmallerImage,
  Column,
  Section,
} from "./Styles";
import Cecilia from "../../assets/Cecilia.svg";
import Sirius from "../../assets/SiriusLogo.svg";
import CzarLogo from "../../assets/CzarLogo.svg";
export default function AboutUs() {
  return (
    <Container>
      <Section>
        <Column>
          <Title>História</Title>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <LargerImage src={Sirius} alt="Sirius Imagem" />
        </Column>
        <SmallerImage src={Sirius} alt="Sirius Imagem" />
      </Section>

      <Section>
        <SmallerImage src={CzarLogo} alt="Czar Imagem" />
        <Column>
          <Title>Trajetória</Title>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <LargerImage src={CzarLogo} alt="Czar Imagem" />
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>Orientadora</Title>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <LargerImage src={Cecilia} alt="Cecilia Imagem" />
        </Column>
        <SmallerImage src={Cecilia} alt="Cecilia Imagem" />
      </Section>
    </Container>
  );
}
