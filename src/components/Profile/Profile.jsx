import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API } from '../../shared/services/API';
import "../Profile/Profile.scss";


const Profile = () => {

const { id } = useParams("id");

const [profile, setProfile] = useState([]);

    useEffect(() => {
     API.get("/users")
        .then((res) => {
       
          setProfile(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id]);

   const localEmail = localStorage.getItem("user")
    let userParsed = JSON.parse(localEmail);
///  Eliminar Favorito:

/* const [favo, setFavo] = useState();

    useEffect(() => {
     API.patch(`user/${id}`)
        .then((res) => {
          setFavo(res.data.favorite);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id]); 
 */
/////
return(    
  
  profile.length > 0 && 
        <div className='body-profile'>
          <div className='content-profile'>
            <div className='datos-profile'>
              
              {profile.map(user => {
                if (user.email === userParsed.email){
                 return(
                 <div className='datos'>
                 <label className='label-profile'>Nombre completo</label>
                  <p className='user'>{user.fullname}</p>
                  <label className='label-profile'>Nickname</label>
                  <p className='user'>{user.nickname}</p>
                  <label className='label-profile'>Email</label>
                  <p className='user'>{user.email}</p>
                  <label className='label-profile'>Fecha de nacimiento</label>
                  <p className='user'>{user.birthday}</p>
                 </div>
               )}
              })}
            </div>
            <h1 className='label-profile'>Favoritos</h1>
        </div>
        <div className='card-content'>
          {profile.find(user => user.email === userParsed.email).favorites.length > 0 && profile.find(user => user.email === userParsed.email).favorites.map(favorite => {
        return(
          
          
            <div className='card-profile' key={favorite._id}>
                <img className='favorite-img' src={favorite.img} alt="" />
                <button className='favorite-delete'>Eliminar de Favoritos</button>
            </div>
         
        )} )} 
        </div>
        </div>
)};

export default Profile 