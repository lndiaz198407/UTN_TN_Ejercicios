import mook_data from '../data/contact-mook';

export const getMessagesByContact = (contact_Id) => {
    for(const contact of mook_data.contacts) {
        if(Number(contact.id) === Number(contact_Id)) {
            return contact.messages;
        }
    }
    return null
}