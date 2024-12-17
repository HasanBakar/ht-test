import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckSharp } from "react-icons/io5";

type NavOptionProps = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const NavOption: React.FC<NavOptionProps> = ({ label, href, icon }) => (
  <a href={href} className="flex flex-col items-center justify-center text-gray-600 hover:text-black">
    {icon}
    <p className="text-sm">{label}</p>
  </a>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navOptions = [
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Kids", href: "/kids" },
    { label: "Home & Living", href: "/home-living" },
    { label: "Beauty", href: "/beauty" },
  ];

  const actionOptions = [
    { label: "Profile", href: "/profile", icon: <CgProfile /> },
    { label: "Wishlist", href: "/wishlist", icon: <CiHeart /> },
    { label: "Bag", href: "/bag", icon: <IoBagCheckSharp /> },
  ];

  return (
    <nav className="px-4 mt-4 flex items-center gap-4 justify-between">
      {/* Brand logo and name */}
      <div className="flex items-center gap-6">
        <img className="w-10 h-10 rounded-sm" src="/assets/logo.png" alt="logo" />
        <h1 className="text-lg font-bold">EasyShoP</h1>

        {/* Menu Items for Large Screens */}
        <ul className="hidden lg:flex items-center gap-8">
          {navOptions.map((option, index) => (
            <li key={index} className="font-medium text-gray-700 hover:text-black">
              <a href={option.href}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex items-center border-2 border-gray-300 rounded-md bg-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-64 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <BsSearch />
            </span>
          </div>
        </div>

        {/* Action Options for Large Screens */}
        <div className="hidden lg:flex items-center gap-8">
          {actionOptions.map((option, index) => (
            <NavOption key={index} label={option.label} href={option.href} icon={option.icon} />
          ))}
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        {isOpen ? (
          <RxCross1 onClick={() => setIsOpen(false)} className="text-3xl cursor-pointer" />
        ) : (
          <MdMenu onClick={() => setIsOpen(true)} className="text-3xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navOptions.map((option, index) => (
              <li key={index} className="font-medium text-gray-700 hover:text-black">
                <a href={option.href}>{option.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-6 py-4">
            {actionOptions.map((option, index) => (
              <NavOption key={index} label={option.label} href={option.href} icon={option.icon} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
