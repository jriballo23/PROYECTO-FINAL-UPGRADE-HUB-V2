import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


const DetailedNews = () => {

    const [detailedNews, setDetailedNews] = useState ({});
    const{id} = useParams()
    useEffect (() =>{
        axios.get (`http://localhost:8080/api/technews/${id}`)
        .then(res =>{
            console.log(res.data)
            setDetailedNews(res.data);
        })
        .catch(err =>{
          console.log(err);
        })
    },[id]) 

  return (
    <div className='card'>
      <div className='cardItem'>
    <div className='cardImage'>
      <img className="imgCard" src={detailedNews.img}  alt={detailedNews.title}/>
      <p>{detailedNews.container}</p>
    </div>
     </div>
    </div>
  )
}

export default DetailedNews;