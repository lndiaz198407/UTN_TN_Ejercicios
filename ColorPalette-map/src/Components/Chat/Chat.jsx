import React, { useContext } from 'react';
import './Chat.css'
import Message from '../Message/Message.jsx';
import { MessagesContext } from '../../Context/MessagesContext.jsx';
function Chat () {
  const {messages} =  useContext(MessagesContext);
if ( messages.length === 0) {
        return (
       <div className="chat_empty">No hay mensajes</div>
    ) 
    }       
return (
    <div >
        {messages.map((message) => {
            return (
               console.log(message),
                <Message
                    key={message.id}
                    id={message.id}
                    emisor={message.emisor}
                    hora={message.hora}
                    texto={message.texto}
                    status={message.status}
                    
                />
            )
        }
        )
        }
    </div>
        )
        }

export default Chat;



