"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Animals", href: "/animals" },
];

const NavLinks=()=> {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1 list-none">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`text-sm font-medium px-3.5 py-1.5 rounded-md transition-colors ${
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
  );
}


export default NavLinks;