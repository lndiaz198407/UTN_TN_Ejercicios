import { createContext, useState } from "react";

  const MessagesContext =  createContext()

const MessagesContextProvider = ({children})=> {
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
  const handleDeleteMessage = (id_message) => {
    const Lista_mensajes= []
    for (const message of messages){

      if (message.id != id_message){
        Lista_mensajes.push(message)
      }
    }
    setmessages(Lista_mensajes)

  }

  const handleNewMessage =(text)=>{
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
        <MessagesContext.Provider
            value={
                {
                messages: messages,
                handleDeleteMessage: handleDeleteMessage,
                handleNewMessage: handleNewMessage
            }}>
            {children}
        </MessagesContext.Provider>
    )
}          
export default MessagesContextProvider
export {MessagesContext} // Exportamos el contexto para que pueda ser utilizado en otros componentes