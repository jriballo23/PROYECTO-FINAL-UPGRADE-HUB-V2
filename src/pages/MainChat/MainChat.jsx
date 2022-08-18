import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../../src/shared/context/chat";
import Moment from "react-moment";
import {getDocs} from "firebase/firestore";
import './MainChat.scss'

const MainChat = () => {
  
  const navigate = useNavigate();
  const { user, persistUser} = useContext(AuthContext);
  
  const { sendMessage, getChatHistory, chatData, loading, updateChatHistory, db, collection, chatRoom} = useContext(ChatContext);
  var [messageToSave, setMessageToSave] = useState("");
  
  useEffect(() => {
    if (!persistUser()) {
      return navigate("/");
    }
    getChatHistory();
    //eslint-disable-next-line
  }, []);


  //// obtener ids de los mensajes
  let Ids=[]
  


  const obtenerDatos = async () => {
   
       const querySnapshot = await getDocs(collection(db, chatRoom));
    querySnapshot.forEach((doc) => {
      Ids.push(doc.id); 
     }); 
  
  }
  
  obtenerDatos();
  //// Persist User ////////////
  
  
 /* const signUserOut = () => {
    navigate("/home");
     signOutChat();  buscar funcionalidad 
  };
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = user;
    await sendMessage(email, messageToSave);
    updateChatHistory();
    setMessageToSave("");
  };



 /*  useEffect(() => {
    openChat();
    //eslint-disable-next-line
  }, []);  */

  

  const chatHistory =
  chatData.length > 0
  ? chatData.sort((a, b) => {
    return a.time - b.time;
  })
  : null;
  
  ///////// Borrar Mensajes //////////////////////////////
  
/*   const Borrado = () =>{
    let a = document.querySelector(".user-chat");
    a.innerHTML="<h4>Welcome</h4>"
  } */
  
/*   const borrarTodo = () =>{
    
    Ids.forEach (idMessage => {
      const removeMessages = async () => {
        await deleteDoc(doc(db, chatRoom , `${idMessage}`)); //// aqui va el Id del documento a eliminar
        console.log("El chat se ha borrado correctamente")
        }
    removeMessages();
    Borrado();
    updateChatHistory();
     
    })
    navigate("/home");
  } */
  
  if (loading) {
    return <div className="loading">
    <h3 className="loading-title">Loading Chat...</h3>
    </div>;
  }
  return (
    <div className="chat-body">
    <div className="chat-container" >
        <div className="chat">
        
          {chatHistory?.map((c) => {
            return c.from === user?.email ? (
              <div key={c.time} className="user-chat">
                <div className="chat-info">
                  {/* <div className="nube">💭</div> */}
                  {c.from} on {""}
                  <>
                    <Moment format="MMMM DD, YYYY HH:mm">{c.time}</Moment>
                  </>
                 {/*  <span>{(user_id === product_use_id)?"🤑 Vendedor 🤑":""} </span> */}
                </div>
                {c.message}
              </div>
            ) : (
              <div key={c.time} className="sender-chat">
                <div className="chat-info">
                {/* <div className="nube">💭</div> */}
                  {c.from} on {""}
                  <>
                    <Moment format="MMMM DD, YYYY HH:mm">{c.time}</Moment>
                  </>
                </div>
                {c.message}
              </div>
            );
          })}
        </div>
      <div className="chat-form-container">
        <form className="chat-form" onSubmit={handleSubmit}>
          <div className="chat-input-container"></div>
          <input
            key="1"
            className="chat-input"
            type="text"
            value={messageToSave}
            onChange={(e) => setMessageToSave(e.target.value)}
          />
          <button className="btn-send">Send</button>
          
        </form>
        <div className="emojis">
              <button className="btn-emoji" onClick={() => setMessageToSave(messageToSave + "😀")}>😀</button>
              <button className="btn-emoji" onClick={() => setMessageToSave(messageToSave + "🙁")}>🙁</button>
              <button className="btn-emoji" onClick={() => setMessageToSave(messageToSave + "👋")}>👋</button>
              <button className="btn-emoji" onClick={() => setMessageToSave(messageToSave + "👍")}>👍</button>
          </div>
      </div>
    </div>

    </div>
  );
};

export default MainChat;
