// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigating between pages

// This is the correct link structure for a multi-page site
const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about-me', label: 'About' },
  { href: '/home#contacts', label: 'Contacts', isHash: true },
];

const Navbar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mt-4 mx-auto max-w-2xl p-2 rounded-lg bg-black/30 backdrop-blur-md flex items-center justify-between">
        <ul className="flex items-center justify-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <li key={typeof link.href === 'string' ? link.href : link.label}>
              {link.isHash ? (
                <Link
                  to={link.href}
                  className="group text-lg font-mono transition-all duration-300"
                >
                  <span className="text-green-400">#</span>
                  <span className="text-gray-300 group-hover:text-white">
                    {link.label}
                  </span>
                </Link>
              ) : (
                <Link
                  to={link.href}
                  className="group text-lg font-mono transition-all duration-300"
                >
                  <span className="text-green-400">#</span>
                  <span className="text-gray-300 group-hover:text-white">
                    {link.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* This is where the FX toggle button will appear */}
        {children}
      </nav>
    </header>
  );
};

export default Navbar;
