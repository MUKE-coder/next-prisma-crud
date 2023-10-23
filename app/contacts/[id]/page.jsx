import DeleteBtn from "@/components/DeleteBtn";
import getContact from "@/libs/getContact";
import Image from "next/image";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default async function Detail({params:{id}}) {
  const contact = await getContact(id);
  return (
    <div className="">
      <div className="flex justify-between items-center bg-white py-16 px-4 rounded-lg ">
        <div className="flex gap-3 items-center">
          <div className="h-32 w-32 overflow-hidden bg-gray-300 rounded-full border-2 border-blue-500 mr-4">
            <Image
              src="/images/profile.jpeg"
              alt={contact.name}
              className="object-cover"
              width={128}
              height={128}
            />
          </div>
          <p className="text-3xl">{contact.name}</p>
        </div>
        <div className="flex gap-3 items-center">
          <Link
            className="py-2 px-6 bg-blue-700 text-white rounded-full"
            href={`/contacts/edit/${contact.id}`}
          >
            Edit
          </Link>
          <DeleteBtn id={contact.id} />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-3 py-8">
        <p className="flex items-center gap-2">
          <BsTelephone size={20} />
          <span>{contact.phone}</span>
        </p>
        <p className="flex items-center gap-2">
          <FiMail size={20} />
          <span>{contact.email}</span>
        </p>
      </div>
    </div>
  );
}
