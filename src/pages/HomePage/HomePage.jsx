import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <div className="content-top-text">
        <p className="top-banner-text">Tu </p>
        <p className="top-banner-text-bold">
          {" "}
          tienda online experta en tecnología{" "}
        </p>
        <p className="top-banner-text"> con un servicio 5 estrellas</p>
      </div>
      <div className="top-banner-content">
        <img
          className="top-banner"
          src="https://tpc.googlesyndication.com/simgad/12064861751394785609"
          alt="banner"
        />
      </div>

      <div className="categories-title">
        <h2 className="categories-title-lighter-line">CATEGORÍAS</h2>
        <h2 className="categories-title-bolder">MÁS RELEVANTES</h2>
      </div>

      <div className="categories">

        <div className="cards-content">

          <Link className="Link" to="/pc">
            <div className="cards-content-cat">
              <img
                className="img-cat"
                src="./categoria-diasnaranjas-gaming_streaming.webp"
                alt=""
              />
              <div className="content-card-text">
                <h3>Ordenadores</h3>
              </div>
            </div>
          </Link>

          <Link className="Link" to="/consolas">
            <div className="cards-content-cat">
              <img
                className="img-cat"
                src="./categoria-diasnaranjas-informatica.webp"
                alt=""
              />
              <div className="content-card-text">
                <h3>Accesorios</h3>
              </div>
            </div>
          </Link>

          <Link className="Link" to="/mobile">
            <div className="cards-content-cat">
              <img
                className="img-cat"
                src="./categoria-diasnaranjas-smartphones_tablets.webp"
                alt=""
              />
              <div className="content-card-text">
                <h3>Móviles</h3>
              </div>
            </div>
          </Link>

          <Link className="Link" to="/Tv">
            <div className="cards-content-cat">
              <img
                className="img-cat"
                src="./categoria-diasnaranjas-televisores.webp"
                alt=""
              />
              <div className="content-card-text">
                <h3>TV's</h3>
              </div>
            </div>
          </Link>

          <Link className="Link" to="/Tv">
            <div className="cards-content-cat">
              <img
                className="img-cat"
                src="./categoria-diasnaranjas-portatiles.webp"
                alt=""
              />
              <div className="content-card-text">
                <h3>Portatiles</h3>
              </div>
            </div>
          </Link>

          <Link className="Link" to="/Tv">
            <div className="cards-content-cat">
              <img
                className="img-cat"
                src="./categoria-diasnaranjas-hogar_clima.webp"
                alt=""
              />
              <div className="content-card-text">
                <h3>Hogar y Clima</h3>
              </div>
            </div>
          </Link>

        </div>
      </div>
      <div className="botton-banner">
        <div className="botton-banner-left">
          <h1 className="botton-banner-left-line1" >Sorteamos un fantástico bundle de Genesis</h1>
          <h3 className="botton-banner-left-line2">Participa y llévate este set up gaming valorado en 955€</h3>
        </div>
        <div className="botton-banner-center">
          <img src="https://cdn.pccomponentes.com/img/concursos/sorteo-genesis-may22.png?11" alt="sorteo"/>
        </div>
        <div className="botton-banner-right">
        
        </div>
      </div>
        <div className="botton-botton-banner">
          <div className="botton-botton-banner-left">
            <p className="pbotton">Envíos gratuitos en pedidos superiores a 50€.</p>
            <img src="64px_truck_delivery.webp" alt="izq"/>
          </div>
          <div className="botton-botton-banner-center">
            <p className="pbotton">Recibe tu pedido en 24/48h.</p>
            <img src="64px_hold.webp" alt="izq"/>
          </div>
          <div className="botton-botton-banner-right">
            <p className="pbotton">Devoluciones gratuitas y garantía de sustitución 24h.</p>
            <img src="64px_refresh.webp" alt="izq"/>
          </div>
        </div>
      <footer>

      </footer>
    </div>
  );
};

export default HomePage;
