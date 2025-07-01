import { createContext, useState } from 'react';  


const ContactContext = createContext({contacts:[]});

export default ContactContext;
export const ContactContextProvider = ({ children }) => {
  const [contacts] = useState(
    [
     {
      id: 1,
      name:'Luis',
      last_time_connected:'13:39',
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhDN4s_Znih-_0R9sahZuYffc5ffB2UF71w&s",
      last_message:{
        id: 1,
        text:'Que tal Tanto tiempo'
      }
     },
    {
      id: 2,
      name:'Horacio',
      last_time_connected:'13:39',
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhDN4s_Znih-_0R9sahZuYffc5ffB2UF71w&s",
      last_message:{
         id: 1,
        text:'Todo Bien'
      }
    },
    {
      id: 3,
      name:'Horacio',
      last_time_connected:'13:39',
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhDN4s_Znih-_0R9sahZuYffc5ffB2UF71w&s",
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
