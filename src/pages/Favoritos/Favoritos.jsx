import React,{useEffect, useState} from 'react'
import { API } from '../../shared/services/API';

const Favoritos = () => {
const [state, setState] = useState([]);
const userParsed = JSON.parse(localStorage.getItem("user"));
useEffect (() =>{
    API.get (`users/${userParsed._id}`)
    .then(res =>{
        console.log(res.data.favorites)
        setState(res.data.favorites) 
    })
    .catch(err =>{
      console.log(err);
    })
},[]) 

  return (
      
      
    <div className='favDiv'>
{state.map((fav,i)=>{
    return(
        <div key={i}>
            <img src={fav.img} alt={fav.tipo}/>
        </div>
    )
}
)}

    </div>
  )
}

export default Favoritos