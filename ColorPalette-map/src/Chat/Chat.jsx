import React from 'react';
import './Chat.css'

function Chat (props){
    let classchat ='chat_content';
    let position = '';
    if (props.emisor==="YO"){
      
        classchat = classchat +' chat_content--green'
        position = 'end';
        }
    else{
        classchat = classchat +' chat_content--grey'
        position = 'star'
    }
    let statusCheck = 'content_status'
    
    if(props.status === "visto"){
        statusCheck = 'content_status_blue';

    }



return (
<div  className="chat_content_box" style={{justifyContent:position}}>
    <div className = {classchat}>  
    <span> {props.texto} </span>
    <div className="content_time_status">
        <span className = "content_time">{props.hora}</span>
        <span className={statusCheck}>✔✔</span>
        <button onClick={() => { props.onDelete(props.id) }}>Eliminar</button>
    </div>
    
    </div>
</div>
 
)

}

export default Chat;



