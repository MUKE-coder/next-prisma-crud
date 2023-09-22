import Link from "next/link";
import React from "react";
import { BiUser, BiMenu, BiHelpCircle } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-14">
      <div className="flex items-center gap-3">
        <button>
          <BiMenu size={28} />
        </button>
        <Link href="/">
          <BiUser size={28} />
        </Link>
        <Link href="/contacts">Contacts</Link>
      </div>
      <div className="">search</div>
      <div className="flex items-center gap-3">
        <button>
          <BiMenu size={28} />
        </button>
        <button>
          <BiHelpCircle size={28} />
        </button>
        <button>
          <FaGear size={28} />
        </button>
      </div>
    </div>
  );
}
