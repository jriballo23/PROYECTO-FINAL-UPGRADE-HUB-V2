import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../TV/TV.scss";

  const TV = () => {
  const url = "http://localhost:8080/api/products";

  const [getProducts, setGetProducts] = useState([]);

  
  useEffect(() => {
  
    axios
    .get(url)
    .then((response) => {
        console.log(response.data);
        setGetProducts(response.data);
    })
   
},[])

    
return(    
    <div className="card-tv-container">
            {getProducts.map(product => {
                if (product.tipo === "TV"){
                    return(
                      
                            <div key={product._id}>
                            <div className="card-tv">
                                    <p>{product.marca}</p>
                                    <Link to = {`/tv/${product._id}`}>
                                    <img className="tv-img"src={product.img} alt={product.tipo}/>
                                    <p>{product.precio}€</p>
                                    </Link>
                                </div>
                            </div>
                    )
                } 
                return null
            }
            )}
        </div>
)};

export default TV;