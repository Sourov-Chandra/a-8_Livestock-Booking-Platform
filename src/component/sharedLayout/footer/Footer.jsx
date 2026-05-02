import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white text-lg font-bold mb-2">
              <span className="text-white">ANIMAL</span>
              <span className="text-green-600 italic ml-1">deal</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Your trusted online marketplace for healthy animals across
              Bangladesh.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/animals"
                  className="hover:text-white transition-colors"
                >
                  All Animals
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-white transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-white transition-colors"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-left items-center gap-1.5">
                <IoMail /> support@animaldeal.com
              </li>
              <li className="flex justify-left items-center gap-1.5">
                <FaPhoneAlt /> +880 1700-000000
              </li>
              <li className="flex justify-left items-center gap-1.5">
                <FaLocationDot /> Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>
            <span className="flex justify-center items-center gap-1.5">
              <MdOutlineCopyright /> {new Date().getFullYear()} All rights
              reserved.
            </span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer