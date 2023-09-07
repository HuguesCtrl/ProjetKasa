import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import "./sass/main.scss";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/ProjetKasa/" element={<Home />} />
          <Route path="/ProjetKasa/about" element={<About />} />
          <Route path="/ProjetKasa/*" element={<Error />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
