import React from 'react'

export default async function 
(id) {
    const res =await fetch(`http://localhost:3000/api/contacts/${id}`);
    const contact = res.json();
    return contact
}
