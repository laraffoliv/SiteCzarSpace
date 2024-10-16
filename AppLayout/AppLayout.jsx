import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import SiteHeader from "../Header/Header";

export default function AppLayout() {
  return (
    <Container>
      <SiteHeader />
      <Outlet />
    </Container>
  );
}
