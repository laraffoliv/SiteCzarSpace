import {
  Title,
  Container,
  FirstImage,
  LargerImage,
  SmallerImage,
  Column,
  Section,
  SecondSection,
  Button,
  SubTitle,
} from "./Styles";
import { useNavigate } from "react-router-dom";
import HomeImage from "../../assets/HomeImage.svg";
import SecondHomeImage from "../../assets/SecondHomeImage.svg";
import ThirdHomeImage from "../../assets/ThirdHomeImage.svg";
import FourthHomeImage from "../../assets/FourthHomeImage.svg";
export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <SecondSection>
        <FirstImage src={HomeImage} alt="Imagem da Equipe" />
        <SecondSection>
          <Title>CZAR SPACE</Title>
        </SecondSection>
      </SecondSection>
      <Section>
        <Column>
          <SubTitle>Sobre a Equipe</SubTitle>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <LargerImage src={SecondHomeImage} alt="Segunda Imagem" />
          <Button onClick={() => navigate("/sobrenos")}>Saiba Mais</Button>
        </Column>
        <SmallerImage src={SecondHomeImage} alt="Segunda Imagem" />
      </Section>

      <Section>
        <SmallerImage src={ThirdHomeImage} alt="Terceira Imagem" />
        <Column>
          <SubTitle>Conquistas</SubTitle>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <LargerImage src={ThirdHomeImage} alt="Terceira Imagem" />
          <Button onClick={() => navigate("/conquistas")}>Saiba Mais</Button>
        </Column>
      </Section>

      <Section>
        <Column>
          <SubTitle>Competições</SubTitle>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <LargerImage src={FourthHomeImage} />
          <Button onClick={() => navigate("/competicoes")}>Saiba Mais</Button>
        </Column>
        <SmallerImage src={FourthHomeImage} alt="Quarta Imagem" />
      </Section>
    </Container>
  );
}
