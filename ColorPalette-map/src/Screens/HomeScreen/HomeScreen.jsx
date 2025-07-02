import React from 'react'
import NewMessage from '../../Components/NewMessages/NewMessage'
import Chat from '../../Components/Chat/Chat'
import '../../Components/Chat/Chat.css'

export default function HomeScreen() {
  

  

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
