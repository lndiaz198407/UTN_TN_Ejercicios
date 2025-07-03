import React, { useContext }  from 'react'
import ContactContext from '../../Context/ContactContext'

import { useParams } from 'react-router'
import Contactlist from '../../Components/ContactList/ContactList'


export default function ContactDetailScreen() {
const {contact_id} = useParams()
const {contacts} = useContext(ContactContext)


console.log('Contactos:', contacts);
  console.log('contact_id de useParams (tipo:', typeof contact_id, '):', contact_id);

  // Encuentra el contacto específico
  const foundContact = contacts.find(contact => contact.id === Number(contact_id));

  console.log('Contacto encontrado:', foundContact);

  return (
    <div>
      {foundContact ? (
        <div key={foundContact.id}>
          <h1>{foundContact.name}</h1>
          <img src={foundContact.img} alt={`${foundContact.name} Imagen de perfil`} />
          <p>{foundContact.name}</p> {/* Cambié <samp> por <p> para una mejor semántica */}
        </div>
      ) : (
        <p>Contacto no encontrado.</p> // Mensaje si no se encuentra ningún contacto
      )}
    </div>
  );
}

