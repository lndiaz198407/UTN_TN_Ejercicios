import React, { useContext } from 'react'
import ContactContext from '../../Context/ContactContext'
import Contactlist from '../../Components/ContactList/ContactList'

export default function ContactScreen() {
  const {contacts} = useContext(ContactContext)
  console.log(contacts)
  return (
    <div>
      <Contactlist/>
    </div>
  )
}



