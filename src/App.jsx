import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos";
import useProducto from "./hooks/useProducto";
import Detalle from "./components/Detalle";

function App() {
  const { productos, favoritos, agregarFavoritos, eliminarFavoritos } =
    useProducto();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Productos
              productos={productos}
              agregarFavoritos={agregarFavoritos}
              eliminarFavoritos={eliminarFavoritos}
            />
          }
        />
        <Route
          path="/favoritos"
          element={
            <Productos
              productos={favoritos}
              agregarFavoritos={agregarFavoritos}
              eliminarFavoritos={eliminarFavoritos}
            />
          }
        />
        <Route path="/producto/:id" element={<Detalle />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
