import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API } from "../../shared/services/API";
import Mapa from "../../components/Mapa/Mapa";
import "../DetailedProduct/DetailedProduct.scss";

const DetailedProduct = () => {
  var chatRoom;

  const [detailedProduct, setDetailedProduct] = useState({});
  const { id } = useParams("id");
  const [producto, setProducto] = useState([]);
  
  useEffect(() => {
    API.get(`products/${id}`)
      .then((res) => {
        console.log(res.data);
        setDetailedProduct(res.data);
        setProducto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  let cp = producto.cp;

  const getUserById = async (id) => {
    return await API.get(`users/${id}`);
  };

  const patchUser = (idUser, favoritos, productos) => {
    let objeto = {
      favorites: favoritos,
      products: productos,
    };
    console.log(objeto);
    API.patch(`users/${idUser}`, JSON.stringify(objeto)).then((res) => {
      console.log(res);
    });
  };


  const userParsed = JSON.parse(localStorage.getItem("user"));

  console.log(JSON.parse(localStorage.getItem("user")));

  const favoritos = async () => {
    const productoParsed = producto;
    console.log(productoParsed);
    let arrayProducto = [];
    let arrayFavoritos = [];
    console.log(userParsed);

    await getUserById(userParsed._id).then((usuario) => {
      console.log("data productos", usuario.data.products);

      for (let favorites of usuario.data.favorites) {
        console.log(favorites._id);
        arrayFavoritos.push(favorites._id);
      }

      for (let producto of usuario.data.products) {
        console.log(producto);
        arrayProducto.push(producto._id);
      }

      if (!arrayFavoritos.includes(productoParsed._id)) {
        arrayFavoritos.push(productoParsed._id);
      } else {
        alert("Este artículo ya lo tienes en favoritos");
      }

      patchUser(userParsed._id, arrayFavoritos, arrayProducto);
    });


  };
  return (
    <div className="card-body">
      <div className="card-mapa">
          <div className="top-content">
            <img
              className="imgCard"
              src={detailedProduct.img}
              alt={detailedProduct.tipo}
            />
            <div className="description">
              <p>{detailedProduct.marca}</p>
              <p>{detailedProduct.modelo}</p>
              <p>Fecha: {detailedProduct.fecha}</p>
              <p>Estado: {detailedProduct.estado}</p>
              <p>{detailedProduct.precio}€</p>
              <div className="content-btn">
                  <NavLink
                    onClick={() => {
                      chatRoom = `${detailedProduct._id}`;
                      localStorage.setItem("chat-name", JSON.stringify(chatRoom));
                    }}
                    to="/chat"
                  >
                    <button className="btn">Chat</button>
                  </NavLink>
                <div class="tooltip">
                        <img
                    onClick={() => favoritos()}
                    className="corazon"
                    src="../star.svg"
                    alt="favoritos"
                  />
                  <span class="tooltiptext">Favoritos</span>
                </div>
              </div>
            </div>
          </div>
        <div className="card-image-mapa">
        </div>
       
     
        <Mapa cp={cp}></Mapa>
        {/* <div>
      <img onClick={favoritos} src="/public/pngegg.png" alt="foto corazon"/>
    </div>
 */}
      </div>
    </div>
  );
};

export default DetailedProduct;
