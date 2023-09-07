import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import "./sass/main.scss";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/projet_kasa/" element={<Home />} />
          <Route path="/projet_kasa/about" element={<About />} />
          <Route path="/projet_kasa/error" element={<Error />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
