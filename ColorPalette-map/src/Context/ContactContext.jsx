import { createContext, useState } from 'react';  
import { getContactList } from '../service/contactService';


const ContactContext = createContext({contacts:[]});

export default ContactContext;
export const ContactContextProvider = ({ children }) => {

  
  const [contacts, setContacts] = useState(
   []

  )
   setTimeout(() => { 
     const contact_List = getContactList();
      setContacts(contact_List);
   },
   1000
   );  
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
