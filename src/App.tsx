// src/App.tsx
import { Routes, Route } from "react-router-dom";
import MatrixIntro from "./components/MatrixIntro";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import AboutMePage from "./pages/AboutMePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MatrixIntro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
       <Route path="/about-me" element={<AboutMePage />} />
    </Routes>
  );
}
