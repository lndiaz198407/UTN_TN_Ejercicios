import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext';


export default function Message({emisor, hora, id, texto, status}) {
  
    const {handleDeleteMessage} = useContext(MessagesContext);
    let classchat ='chat_content';
    let position = '';
    if (emisor==="YO"){
        classchat = classchat +' chat_content--green'
        position = 'end';
        }
    else{
        classchat = classchat +' chat_content--grey'
        position = 'star'
    }
    let statusCheck = 'content_status'
    
    if(status === "visto"){
        statusCheck = 'content_status_blue';

    }
console.log(emisor, id)
  return (
   <div  className="chat_content_box" style={{justifyContent:position}}>
        <div className = {classchat}>  
            <span> {texto} </span>
            <div className="content_time_status">
            <span className = "content_time">{hora}</span>
            <span className={statusCheck}>✔✔</span>
            <button onClick={()=>{handleDeleteMessage(id)}}>Eliminar</button>
    </div>
    
    </div>
</div>
  )
}

