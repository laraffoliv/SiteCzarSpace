import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Championships, AboutUs } from "./Pages";
import Achievements from "./Pages/Achievements/Acheviements";
import { AppLayout } from "./AppLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="sobrenos" element={<AboutUs />} />
      <Route path="competicoes" element={<Championships />} />
      <Route path="conquistas" element={<Achievements />} />
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
