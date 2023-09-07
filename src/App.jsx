import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import "./sass/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/projet_kasa/" element={<Home />} />
          <Route path="/projet_kasa/about" element={<About />} />
          <Route path="/projet_kasa/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
