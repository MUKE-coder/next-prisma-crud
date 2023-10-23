import React from 'react'

export default async function getContacts() {
  {
    const response = await fetch("http://localhost:3000/api/contacts",{cache:"no-store"});
    const contacts =await response.json()
    return contacts
  }
}
