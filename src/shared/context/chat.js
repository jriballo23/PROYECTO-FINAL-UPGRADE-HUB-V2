import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
getFirestore,
collection,
addDoc,
getDocs,
onSnapshot,
query } from 'firebase/firestore';
import { AuthContext } from "./auth";


const firebaseConfig = {
    apiKey: "AIzaSyAgdd3cKWw2ri3NmUtIfzsIsaZh7pEJsrE",
    authDomain: "chat-agosto.firebaseapp.com",
    projectId: "chat-agosto",
    storageBucket: "chat-agosto.appspot.com",
    messagingSenderId: "324100353703",
    appId: "1:324100353703:web:8d842097bbac0052c57582"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore (app);


export const ChatContext = createContext(null);

export const ChatProvider = ({ children }) =>{

// state del chat

const [chatData, setChatData]= useState({
from:"",
time:"",
message:"",
});

const [loading, setLoading] = useState(false);

// saving messages


const sendMessage = async (from, message) => {
    const chatRoom = localStorage.getItem("chat-name");
    try {
        if (message === '') return;
        const docRef = await addDoc(collection(db, chatRoom),{
            from:from,
            message: message,
            time: Date.now(),
        });
        return docRef;
    } catch (error) {
        console.log("Error sending message",error)
    }
}

//get chat history
const { user } = useContext(AuthContext);

/* var mail = localStorage.getItem('user'); */

const getChatHistory = async () => {
  let FirstMessage={id: 1, from: `${user?.email}`, time:Date.now() , message: 'Bienvenido, eres el primero por aqui!!'};
    try {
        
        const chatRoom = localStorage.getItem("chat-name");
        const querySnapshot = await getDocs(collection(db, chatRoom));
        let tempChatData = [];
        console.log(querySnapshot)
        console.log(querySnapshot.size)
        if (querySnapshot.size === 0){
           /* alert("Enorabuena. Eres el Primero!") */
                setChatData([FirstMessage]);
        }
        querySnapshot.forEach(doc => {
            if(doc.exists()){
                tempChatData.push({id: doc.ide, ...doc.data()});
                console.log(tempChatData);
                setChatData([...tempChatData]);
                setLoading(false);
            } 

        })
    } catch (error) {
        console.log("no se ha creado la coleccion!")
        setLoading(false);
        /* const chatDiv = document.querySelector(".chat");
        chatDiv.scrollTop = chatDiv.scrollHeight; */
    }
}


// update chat history

const updateChatHistory = () => {
    const chatRoom = localStorage.getItem("chat-name");
    const q = query(collection(db,chatRoom));
    onSnapshot(q, (querySnapshot) =>{
        let tempChatData = [];
        querySnapshot.forEach(doc =>{
            tempChatData.push({id: doc.ide, ...doc.data()});
            setChatData([...tempChatData]);
                setLoading(false);
        });
       
    });
    /* const chatDiv = document.querySelector(".chat");
        chatDiv.scrollTop = chatDiv.scrollHeight; */
};


    const chatRoom = localStorage.getItem("chat-name");


    return <ChatContext.Provider value={{sendMessage, getChatHistory, chatData, loading, updateChatHistory, db, collection, chatRoom}}>
    {children}
    </ChatContext.Provider>
};