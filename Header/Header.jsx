import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { Container, NavLinks, StyledLink } from "./Styles"; // Importando StyledLink
import { InstagramOutlined } from "@ant-design/icons";

const { Header } = Layout;

const SiteHeader = () => {
  const navigate = useNavigate();

  return (
    <Header style={{ background: "#000", height: "6rem" }}>
      <Container>
        <NavLinks>
          <li>
            <StyledLink onClick={() => navigate("/")}>
              Página Inicial
            </StyledLink>
          </li>
          <li>
            <StyledLink onClick={() => navigate("/sobrenos")}>
              Sobre Nós
            </StyledLink>
          </li>
          <li>
            <StyledLink onClick={() => navigate("/competicoes")}>
              Competições
            </StyledLink>
          </li>
          <li>
            <StyledLink onClick={() => navigate("/conquistas")}>
              Conquistas
            </StyledLink>
          </li>
          <li>
            <StyledLink>
              <a
                href="https://www.instagram.com/czarspace/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramOutlined
                  style={{
                    color: "#fff",
                    fontSize: "2rem",
                    lineHeight: "normal",
                  }}
                />
              </a>
            </StyledLink>
          </li>
        </NavLinks>
      </Container>
    </Header>
  );
};

export default SiteHeader;
