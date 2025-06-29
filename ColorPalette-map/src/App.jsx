import React, {} from "react"
import ColorPalette from "./ColorPalette"
import Chat from "./Components/Chat/Chat"
import './Components/Chat/Chat.css'
import NewMessage from "./Components/NewMessages/NewMessage";

function App() {
// 1. Define tus datos de chat en un arreglo de objetos
  

  return (
      <div>
        <div className="content"> 
          <Chat />  
          
      </div>
   
    <div>
      <NewMessage/>
    </div>

     <ColorPalette
            likes = {9}
            time = '58 minutes'
            colors = {['#619AD0', '#9DC7E3', '#E9DCD1', '#C6B2A3']}
     />   
     </div>
  
  
  )
}


export default App
