"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Animals", href: "/animals" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { data, isPending } = useSession();

  return (
    <>
      <div className="flex items-center gap-2">
        {isPending ? (
          <div className="w-8 h-8 rounded-full bg-gray-100 animate-pulse" />
        ) : data ? (
          <Link
            href="/my-profile"
            className="hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 bg-[#064E3B] flex items-center justify-center">
              {data.user.image ? (
                <Image
                  src={data.user.image}
                  alt={data.user.name}
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-white text-sm font-semibold">
                  {data.user.name?.[0]?.toUpperCase()}
                </span>
              )}
            </div>
          </Link>
        ) : (
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Log in
          </Link>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <RxCross1 /> : <AiOutlineMenu />}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-md px-6 py-4">
          <ul className="flex flex-col gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-medium px-3.5 py-2 rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-black bg-gray-100 font-semibold"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileMenu