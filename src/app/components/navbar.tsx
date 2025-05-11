"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DeviceNet from '@images/DeviceNet.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
          <Link href="/" passHref>
            <Image
              className="w-[150px] h-auto mr-4" // Aggiunto margine a destra del logo
              src={DeviceNet}
              alt="Your Company"
               // Redirect to home on logo click
            />
          </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for Hamburger Menu */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon for Close Menu */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden sm:block">
  <div className="flex space-x-4 justify-start">
    <Link
      href="/"
      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Home
    </Link>
    <Link
      href="/Il_Nostro_Prodotto"
      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Il Nostro Prodotto
    </Link>
    <Link
      href="/DeviceNet"
      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      DeviceNet
    </Link>
    <Link
      href="/Recensioni"
      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      Cosa dicono di noi
    </Link>
  </div>
</div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? '' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/Il_Nostro_Prodotto"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            Il Nostro Prodotto
          </Link>
          <Link
            href="/DeviceNet"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            DeviceNet
          </Link>
          <Link
            href="/Recensioni"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            Cosa dicono di noi
          </Link>
        </div>
      </div>
    </nav>
  );
}