import React, { useContext } from 'react';
import ContactItems from '../ContactItems/ContactItems';
import ContactContext from '../../Context/ContactContext';

const Contactlist = () => {
  const { contacts } = useContext(ContactContext);

    return (
      <div>
        <ul>
          {contacts.map((contact) => {
              return <ContactItems 
                key={contact.id}
                id={contact.id}
                name={contact.name}
                img={contact.img}
                last_time_connected={contact.last_time_connected}
                last_message={contact.last_message}
                />
              }
         
          )
         }
        </ul>
      </div>
    );
}
export default Contactlist; 