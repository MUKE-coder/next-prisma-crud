import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <Link
      href="/contacts/123"
      className="flex justify-between items-center bg-white py-2 px-4 rounded-lg shadow-md border border-blue-100"
    >
      <div className="flex gap-3 items-center">
        <div className="h-12 w-12 overflow-hidden bg-gray-300 rounded-full border-2 border-blue-500">
          <Image
            src="/images/profile.jpeg"
            alt="contact image"
            className="object-cover"
            width={48}
            height={48}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base">Muke JB</p>
          <p>mukejb@gmail.com</p>
        </div>
      </div>
      <p className="">0784143872</p>
    </Link>
  );
}
