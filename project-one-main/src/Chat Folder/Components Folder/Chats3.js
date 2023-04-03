import React from "react"
import { useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../Context folder/AuthContext";
import database from "../../firebase";
import { ChatContext } from "../../Context folder/ChatContext";


import Chats3Style from "./Chats3.module.css"



function Chats3() {

    const [chats, setChats]= useState([])
    
    const {currentUser} = useContext(AuthContext) 
    const {dispatch} = useContext(ChatContext)

    useEffect(() =>{

        const getChats =() =>{
            const unsub = onSnapshot(doc(database, "userChats", currentUser.uid), (doc) => {
            setChats(doc.data());
        });

        return() =>{
            unsub();
        };
    };        
        currentUser.uid  && getChats()
    },[currentUser.uid]);
    console.log(Object.entries(chats));


    const handleSelect = (u)=>{
        dispatch({type:"CHANGE_USER", payload: u})
    }

    return(
        <div>
            {Object.entries(chats)?.sort((a,b)=> b[1].date - a[1].date).map((chat) =>(
            
            <div 
            className={Chats3Style.userChat} 
            key={chat[0]} 
            onClick={()=>handleSelect(chat[1].userInfo)}>
        <img className ={Chats3Style.img} src="https://static.zerochan.net/Nekomata.Okayu.full.3089724.jpg" alt="test"/>
        <div className={Chats3Style.userChatInfo}>
            <span className={Chats3Style.userChatSpan}>{chat[1].userInfo.displayName}</span>
            <p className={Chats3Style.userChatP}>{chat[1].lastMessage?.text}</p>
        </div>
    </div>      
    ))}        
</div>
    )
}

export default Chats3