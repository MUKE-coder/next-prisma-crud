import React from 'react'

export default async function deleteById() {
    {
        const res =await fetch(`http://localhost:3000/api/contacts/${id}`,{
            method:"DELETE"
        });
        const contact = res.json();
        return contact
    }
}
