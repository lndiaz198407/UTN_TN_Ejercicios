import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext';
export default function NewMessage() {
 const {handleNewMessage} =useContext(MessagesContext);
    const handleSubmitNewMessage = (e) => {
    e.preventDefault()
    let new_text = e.target.text.value
    handleNewMessage(new_text)
  e.target.reset() // Reset the form after submission
}
    return (
        <form onSubmit={handleSubmitNewMessage}>
          <div> 
            <textarea 
              placeholder='Escribe Mensaje.' 
              id='text' 
              name='text'
              required 
            />
          </div>
          <button type='submit'>Enviar</button>
        </form>
  )
}
