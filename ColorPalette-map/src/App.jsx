import React, {} from "react"
import ColorPalette from "./ColorPalette"
import {Routes, Route} from 'react-router'
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import { getMessagesByContact } from "./service/messagesService"
import ContactDetailScreen from "./Screens/ContactDetailScreen/ContactDetailScreen"

function App() {
// 1. Define tus datos de chat en un arreglo de objetos
  

console.log(getMessagesByContact(1)) 


  return (
      <div>
         <div>
           <Routes>
             <Route 
                path="/contacts/:contact_id/messages" 
                element={<HomeScreen />}
              />
              <Route 
                path="/contact" 
                element={<ContactScreen/>}
              />   
                <Route 
                path="/contact-detail/:contact_id" 
                element={<ContactDetailScreen/>}   
              /> 
            </Routes>         
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
