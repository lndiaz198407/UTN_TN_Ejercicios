import { createContext, useState } from 'react';  
import { getContactList } from '../service/contactService';


const ContactContext = createContext(
  {
    contacts:[],
    loadContact:() => {}
  }
);

export default ContactContext;
export const ContactContextProvider = ({ children }) => {

  
  const [contacts, setContacts] = useState(
   []

  )

const loadContact = (contact_id) => {
  const contact = getContactList(contact_id)
  setContacts(contact)
}
   
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
            contacts: contacts,
            loadContact:loadContact
          }
          }>
      {children}
    </ContactContext.Provider>
  );
};
