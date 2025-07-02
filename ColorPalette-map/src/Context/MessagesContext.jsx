import { createContext, useState } from "react";
import { getMessagesByContact } from "../service/messagesService";

  const MessagesContext =  createContext(
    {
      messages: [],
      handleDeleteMessage: () => {},
      handleNewMessage: () => {},
      loadMessages:() => {}     
    }
  )

const MessagesContextProvider = ({children})=> {
 const [messages, setmessages] = useState([])

const loadMessages = (contact_id) => {
const messages = getMessagesByContact(contact_id)
setmessages(messages)
}
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
                handleNewMessage: handleNewMessage,
                loadMessages: loadMessages
            }}>
            {children}
        </MessagesContext.Provider>
    )
}          
export default MessagesContextProvider
export {MessagesContext} // Exportamos el contexto para que pueda ser utilizado en otros componentes