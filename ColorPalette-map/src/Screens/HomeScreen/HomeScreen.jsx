import React, { useContext, useEffect } from 'react'
import NewMessage from '../../Components/NewMessages/NewMessage'
import Chat from '../../Components/Chat/Chat'
import '../../Components/Chat/Chat.css'
import { Link, useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import ContactItems from '../../Components/ContactItems/ContactItems';
export default function HomeScreen() {
  
  const { contact_id } = useParams()
  console.log(contact_id)
  const { loadMessages } = useContext(MessagesContext)
  useEffect(() => {
    loadMessages(contact_id)
  },
    [contact_id]
  )

  return (
    <div>
        <div className="content"> 
            <Chat/>  
        </div>
        <div>
            <NewMessage/>
        </div>
        <div> 
          <Link to={`/contact-detail/${contact_id}'`}>
          <button>contacto </button>
          </Link>
        </div>
    </div>
  )
}
