import React, { useContext, useEffect } from 'react'
import NewMessage from '../../Components/NewMessages/NewMessage'
import Chat from '../../Components/Chat/Chat'
import '../../Components/Chat/Chat.css'
import { useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';

export default function HomeScreen() {
  
  const { contact_id } = useParams()
  console.log(contact_id)
  const { loadMessages } = useContext(MessagesContext)
  useEffect(() => {
    loadMessages(contact_id)
  },
    [contact_id, loadMessages]
  )

  return (
    <div>
        <div className="content"> 
            <Chat/>  
        </div>
        <div>
            <NewMessage/>
        </div>
    </div>
  )
}
