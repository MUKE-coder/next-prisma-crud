import React from "react";
import Contact from "./Contact";

export default function ContactList() {
  return (
    <div className="flex flex-col gap-4">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}
