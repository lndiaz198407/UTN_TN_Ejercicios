import { createContext, useState } from 'react';  


const ContactContext = createContext({contacts:[]});

export default ContactContext;
export const ContactContextProvider = ({ children }) => {
  const [contacts] = useState(
    [
     {
      id: 1,
      neme:'Luis',
      last_time_connected:'13:39',
      img:"https://img2.rtve.es/i/?w=1600&i=1460978487133.jpg",
      last_message:{
        id: 1,
        text:'Que tal Tanto tiempo'
      }
     },
    {
      id: 2,
      neme:'Horacio',
      last_time_connected:'13:39',
      img:"https://img2.rtve.es/i/?w=1600&i=1460978487133.jpg",
      last_message:{
         id: 1,
        text:'Todo Bien'
      }
    },
    {
      id: 3,
      neme:'Horacio',
      last_time_connected:'13:39',
      img:"https://img2.rtve.es/i/?w=1600&i=1460978487133.jpg",
      last_message:{
        id: 1,
        text:'Todo Bien'
      }  
    }
    ]
  )

  return (
    <ContactContext.Provider
    value={
          {
            contacts: contacts
          }
          }>
      {children}
    </ContactContext.Provider>
  );
};
