import './App.css'
import Home from "./pages/Home"
import Lipstick from "./pages/Lipstick"
import Bronzer from "./pages/Bronzer"
import Blush from "./pages/Blush"
import Eyebrow from "./pages/Eyebrow"
import Eyeliner from "./pages/Eyeliner"
import Eyeshadow from "./pages/Eyeshadow"
import Foundation from "./pages/Foundation"
import Lipliner from "./pages/Lipliner"
import Mascara from "./pages/Mascara"
import Nailpolish from "./pages/Nailpolish"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate replace to="home"/>}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="/lipstick" element={<Lipstick />}></Route>
          <Route path="/bronzer" element={<Bronzer />}></Route>
          <Route path="/blush" element={<Blush />}></Route>
          <Route path="/eyebrow" element={<Eyebrow />}></Route>
          <Route path="/eyeliner" element={<Eyeliner />}></Route>
          <Route path="/eyeshadow" element={<Eyeshadow />}></Route>
          <Route path="/foundation" element={<Foundation />}></Route>
          <Route path="/lipliner" element={<Lipliner />}></Route>
          <Route path="/mascara" element={<Mascara />}></Route>
          <Route path="/nailpolish" element={<Nailpolish />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
