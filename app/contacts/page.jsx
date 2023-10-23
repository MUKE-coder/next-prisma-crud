import ContactList from "@/components/ContactList";
import getContacts from "@/libs/getContacts";

export default async function Contacts() {
  const contacts = await getContacts();
  return (
    <section className="max-w-2xl">
      <ContactList contacts={contacts} />
    </section>
  );
}
