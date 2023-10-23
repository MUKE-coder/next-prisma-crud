"use client";
import Link from "next/link";
import { AiOutlinePlus, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiArchiveIn, BiTrash } from "react-icons/bi";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathname = usePathname();
  // console.log(pathname);
  if (pathname === "/") return null;
  return (
    <div className="flex flex-col gap-3 py-4 px-4">
      <Link
        href="/contacts/create"
        className="flex items-center gap-2 bg-gray-100 rounded-full py-2 px-4 mb-4"
      >
        <AiOutlinePlus size={28} className="text-pink-600" />
        <span className="text-sm"> Create Contact</span>
      </Link>

      <div className="flex flex-col">
        <Link href="/contacts" className="flex items-center gap-2  py-2 px-4">
          <AiOutlineUsergroupAdd size={20} className="" />
          <span className="text-sm"> Contacts</span>
        </Link>
        <Link
          href="/contacts/create"
          className="flex items-center gap-2  py-2 px-4"
        >
          <BiArchiveIn size={20} className="" />
          <span className="text-sm"> Archived Contacts</span>
        </Link>
        <Link
          href="/contacts/create"
          className="flex items-center gap-2 py-2 px-4"
        >
          <BiTrash size={20} className="" />
          <span className="text-sm"> Trash </span>
        </Link>
      </div>
    </div>
  );
}
