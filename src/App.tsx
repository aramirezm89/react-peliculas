import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IndiceGeneros from "./peliculas/generos/IndiceGeneros";
import PaginaPrincipal from "./peliculas/PaginaPrincipal";
import Menu from "./utils/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/generos" element={<IndiceGeneros />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
