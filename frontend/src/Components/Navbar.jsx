// Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Event Gallery", href: "/event-gallery" },
    { name: "Trainer", href: "/trainers" },
    { name: "Contact Us", href: "/contactus" },
  ];

  return (
    <nav className="bg-[#fffdd0] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/ios-filled/50/yoga.png"
            alt="Yoga Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold" style={{ color: '#fca311' }}>
            Yoga
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-800 hover:text-[#fca311] transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fffdd0] px-4 pb-4 space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block text-gray-800 hover:text-[#fca311] transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
