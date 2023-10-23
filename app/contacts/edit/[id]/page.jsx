import EditContactForm from "@/components/EditContactForm";
import getContact from "@/libs/getContact";
import React from "react";

export default  async function page({params:{id}}) {
  const contact = await getContact(id)
  return (
    <div className="w-full sm:w-1/2">
      <EditContactForm contact={contact} />
    </div>
  );
}
