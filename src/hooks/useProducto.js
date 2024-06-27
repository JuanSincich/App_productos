import { useState, useEffect } from "react";
import { obtenerProductos } from "../servicios/productosService";

export default function useProducto() {
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((data) => {
      setProductos(data);
    });
  }, []);

  function agregarFavoritos(producto) {
    const newFavoritos = [...favoritos];
    newFavoritos.push(producto);
    setFavoritos(newFavoritos);
  }
  function eliminarFavoritos(producto) {
    const newFavoritos = favoritos.filter((e) => e.id !== producto.id);
    setFavoritos(newFavoritos);
  }

  return { productos, favoritos, agregarFavoritos, eliminarFavoritos };
}
