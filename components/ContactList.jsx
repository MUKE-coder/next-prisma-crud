import React from "react";
import Contact from "./Contact";

export default function ContactList({contacts}) {
  return (
    <div className="flex flex-col gap-4">
      {
        contacts.map((contact)=>{
          return(
            <Contact key={contact.id} contact={contact}/>
          )
        })
      }
    </div>
  );
}
