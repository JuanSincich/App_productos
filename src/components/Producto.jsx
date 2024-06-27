import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavImg from "../img/like border for react.png";
import NoFavImg from "../img/like for react.png";

export default function Producto({
  producto,
  agregarFavoritos,
  eliminarFavoritos,
}) {
  const [favorito, setFavorito] = useState(false);

  function handleClick() {
    if (favorito) {
      eliminarFavoritos(producto);
      setFavorito(false);
    } else {
      agregarFavoritos(producto);
      setFavorito(true);
    }
  }

  return (
    <div className="producto">
      <Link to={`/producto/${producto.id}`}>
        <img src={producto.image} alt="" />
      </Link>
      <div className="info">
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>
      {favorito ? (
        <img className="fav-icon" src={NoFavImg} onClick={handleClick} />
      ) : (
        <img className="fav-icon" src={FavImg} onClick={handleClick} />
      )}
    </div>
  );
}
