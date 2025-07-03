import React, { useContext } from 'react'
import ContactContext from '../../Context/ContactContext'
import { useParams } from 'react-router'

export default function ContactDetailScreen() {
  const { contact_id } = useParams()
  console.log(contact_id)
  const { contacts } = useContext(ContactContext)
const userById = contacts.find(contact => contact.id === 2);
  console.log('Usuario por ID:', userById);


  return (
    <div>
            <div>

            </div>
    </div>
  )
}

