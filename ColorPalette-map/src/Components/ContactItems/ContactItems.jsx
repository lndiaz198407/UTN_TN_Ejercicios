import React from "react";
import { Link } from "react-router";
const ContactItems = ({id, name, img, last_time_connected, last_message}) => {
  return (
    
        <Link to={'/home'}>
            <div>
            <img src={img} alt={`${name} Imagen Ptrofile`} />
            <samp>{name}</samp>
            <div>{last_message.text}</div>
            <div>{last_time_connected}</div>
            <div>{id}</div>
            </div>
        </Link>
  )
}

export default ContactItems;