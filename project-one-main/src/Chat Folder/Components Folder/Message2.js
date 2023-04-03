import React, { useContext, useEffect, useRef } from "react"
import Message2Style from "./Message2.module.css"
import { AuthContext } from "../../Context folder/AuthContext"
import { ChatContext } from "../../Context folder/ChatContext"
import { Avatar } from "@mui/material"

function Message2({message}) {

    const {currentUser} = useContext(AuthContext)
    const{data} = useContext(ChatContext)
    const ref = useRef()

    useEffect(() => {
        ref.current?.scrollIntoView({})
    },[message]);


    console.log()
    return(
        

        // message.senderId === currentUser.uid ? (

        //     <div className="chatScreen__message">
        //     <p className="chatScreen__textUser">{message.text}</p>
        // </div>
        // ) : (
        
        // <div className="chatScreen__message">
        //     <Avatar
        //     className="chatscreen__image"
        //     alt={message.name}
        //     src={message.image}
        //     />
        //     <p className="chatScreen__text">{message.text}</p>
        // </div>)

        message.senderId === currentUser.uid ? (

        <div ref={ref} className={Message2Style.messageOwner}>
            <div className={Message2Style.messageInfo}>
                <Avatar className= {Message2Style.messageInfoImg}
                src={currentUser.photoURL}
                alt={currentUser.displayName}/>
                <span>just now</span>
        </div>
            <div className={Message2Style.messageContentOwner}>
            <p className={Message2Style.paragraphOwner}>{message.text}</p>
            { message.image && <img className={Message2Style.messageContentImg} 
                 src={message.image} alt=""/>}
            </div>
        </div> 
        ):( 
        
        <div className={Message2Style.message}>
            <div className={Message2Style.messageInfo}>
                <Avatar className= {Message2Style.messageInfoImg}
                src={data.user.photoURL}
                alt={data.user.displayName}/>
                <span>just now</span>
        </div>
            <div className={Message2Style.messageContent}>
            <p className={Message2Style.paragraph}>{message.text}</p>
            { message.image && <img className={Message2Style.messageContentImg} 
                 src={message.image} alt=""/>}
            </div>
        </div> 
        )






        // <div className={Message2Style.message}>
        //     <div className={Message2Style.messageInfo}>
        //         <img className={Message2Style.messageInfoImg}
        //          src="" alt="name"/>
        //         <span>{message.id}</span>
        //     </div>
        //     <div className={Message2Style.messageContent}>
        //         <p className={Message2Style.paragraph}>{message.text}</p>
        //         { message.image && <img className={Message2Style.messageContentImg} 
        //         src={message.image} alt="name"/>}
        //     </div>
        // </div>
    )
}

export default Message2