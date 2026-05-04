import Link from "next/link";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 h-16 bg-white border-b border-gray-100 sticky top-0 z-50">
      <Link
        href="/"
        className="text-2xl font-extrabold tracking-wider flex items-center gap-2"
      >
        <h2>
          <span className="text-[#064E3B]">Qurbani</span>
          <span className="text-[#D4AF37] italic ml-1">Hat</span>
        </h2>
      </Link>
      <div className="hidden md:flex items-center gap-6">
        <NavLinks />
      </div>
      <div className="hidden md:flex items-center gap-6">
        <AuthButtons />
      </div>

      <div className="flex md:hidden gap-2 item-center ">
        <MobileMenu />
      </div>
    </nav>
  );
}
