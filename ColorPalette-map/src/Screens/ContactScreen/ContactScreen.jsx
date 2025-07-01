import React, { useContext } from 'react'
import ContactContext from '../../Context/ContactContext'

export default function ContactScreen() {
  const {contacts} = useContext(ContactContext)
  console.log(contacts)
  return (
    <div>ContactScreen</div>
  )
}
