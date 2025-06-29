import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MessagesContextProvider from './Context/MessagesContext.jsx'

createRoot(document.getElementById('root')).render(
  <MessagesContextProvider>
    <App />
  </MessagesContextProvider>
    

)
