import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact({contact}) {
  return (
    <Link
      href={`/contacts/${contact.id}`}
      className="flex justify-between items-center bg-white py-2 px-4 rounded-lg shadow-md border border-blue-100"
    >
      <div className="flex gap-3 items-center">
        <div className="h-12 w-12 overflow-hidden bg-gray-300 rounded-full border-2 border-blue-500">
          <Image
            src="/images/profile.jpeg"
            className="object-cover"
            width={48}
            height={48}
            alt={contact.name}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base">{contact.name}</p>
          <p>{contact.email}</p>
        </div>
      </div>
      <p className="">{contact.phone}</p>
    </Link>
  );
}
