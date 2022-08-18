/* import React, { createContext, useState } from "react"
import '../../App.scss'
import { Products } from "../../components/Products/Products";


const ProductsPage= ()=>{

    var [producto , setProducto]= useState ("");
    
    return(
        <>
        <ProductContext.Provider  value={{producto}}>
            <button onClick={() => setProducto(producto="Consola")}>Consolas</button>
            <button  onClick={() => setProducto(producto="Movil")}>Moviles</button>
            <button  onClick={() => setProducto(producto="PC")}>Ordenandores</button>
            <button  onClick={() => setProducto(producto="TV")}>Televisores</button>
            <Products/>
        </ProductContext.Provider>
        </>
     )
    }
    
export const ProductContext = createContext ();
export default ProductsPage; */