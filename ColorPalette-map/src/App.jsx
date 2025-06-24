import React, { useState } from "react"
import ColorPalette from "./ColorPalette"
import Chat from "./Chat/Chat"
import './Chat/Chat.css'
function App() {
// 1. Define tus datos de chat en un arreglo de objetos
  const [messages, setmessages] = useState( [
    {
      id: 1,
      emisor: 'YO',
      hora: '23:10',
      texto: 'Hola que tal?',
      status: 'visto'
    },
    {
      id: 2,
      emisor: 'USUARIO',
      hora: '23:11',
      texto: 'Si, hoy aprendi estados',
      status: 'visto'
    },
    {
      id: 3,
      emisor: 'YO',
      hora: '23:12',
      texto: 'Eso que significa 🤓?',
      status: 'no-visto'
    },
    {
      id: 4,
      emisor: 'USUARIO',
      hora: '23:42',
      texto: 'Que estoy aprendiendo',
      status: 'no-visto'
    },
    {
      id: 5,
      emisor: 'YO',
      hora: '23:12',
      texto: 'Eso que significa 🤓?',
      status: 'no-visto'
    }

  ]);
/*eliminar mensages*/
  const handleDeleteMessage = (id) => {
    const Lista_mensajes= []
    for (const message of messages){

      if (message.id != id){
        Lista_mensajes.push(message)
      }
    }
    setmessages(Lista_mensajes)

  }

  const handleNewMessage =(e)=>{
  e.preventDefault()
  let text = e.target.text.value

    const NewMessage ={
      id : messages.length + 1,
      emisor :'YO',
      hora : '21:30',
      texto: text,
      status: 'no-visto'
    }
    const list_messages= [...messages]
    list_messages.push(NewMessage)
    setmessages(list_messages)

  } 

  return (
      <div>
        <div className="content"> 
          {messages.map(message => (
         <Chat
            // Es crucial usar una 'key' única cuando renderizas listas de componentes
            // El 'id' del mensaje es perfecto para esto.
            key={message.id}
            id={message.id}
            emisor={message.emisor}
            hora={message.hora}
            texto={message.texto}
            status={message.status}
            onDelete={handleDeleteMessage}
          />
          ))}
      </div>
   
        <form onSubmit={handleNewMessage}>
          <div> 
            <input 
              placeholder='Escribe Mensaje.' 
              id='text' 
              name='text'
              required 
            />
          </div>
          <button type='submit'>Enviar</button>
        </form>


        
     <ColorPalette
            likes = {9}
            time = '58 minutes'
            colors = {['#619AD0', '#9DC7E3', '#E9DCD1', '#C6B2A3']}
     />   
     </div>
  
  
  )
}


export default App
