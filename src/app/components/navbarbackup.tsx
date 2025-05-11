"use client";

import React from 'react';
//import EniLogo from '@images/Eni-logo.png';
import DeviceNet from '@images/DeviceNet.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type NavItem = {
  text: string;
  link: string;
  current?: boolean;
};

type NavbarProps = {
  navItems: NavItem[];
};

export default function Navbar({ navItems }: NavbarProps) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <div>
      <nav className="bg-[var(--color-primary)]"> {/*bg-[#bf950a]*/}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" //bg-yellow-700
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
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
                <svg
                  className="hidden h-6 w-6"
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

            { 
            /* original
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> 
              
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="h-8 w-auto"
                  src= {DeviceNet}
                  width={150} // Aumenta la larghezza
                  height={50} // Aumenta l'altezza
                  alt="Your Company"
                />
              </div>
              
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className={`rounded-md px-3 py-2 text-sm font-medium ${
                        item.current
                          ? 'text-black'
                          : 'text-gray-900 hover:var(--color-primary)  hover:text-white' // hover:bg-[#bf950a]
                      }`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            */
            }

<div className="flex items-center justify-start w-full gap-x-4 ">
  {/* Logo */}
  <div className="flex flex-shrink-0 items-center">
    <Image
      className="w-[150px] h-auto" // Dimensioni personalizzate per il logo
      src={DeviceNet}
      alt="Your Company"
    />
  </div>

  {/* Navbar items */}
  <div className="hidden sm:ml-6 sm:block">
    <div className="flex space-x-4">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`rounded-md px-3 py-2 text-sm font-medium ${
            item.current
              ? 'text-black'
              : 'text-gray-900 hover:bg-gray-700 hover:text-white'
          }`}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.text}
        </Link>
      ))}
    </div>
  </div>
</div>




          </div>
        </div>



        <div className={`${isMobileMenuOpen ? '' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:var(--color-primary) hover:text-white">Home</a> {/* hover:bg-[#bf950a] */}
                    <a href="/Mattei" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:var(--color-primary) hover:text-white">Enrico Mattei</a> {/* hover:bg-[#bf950a] */}
                    <a href="/Eni" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:var(--color-primary) hover:text-white">L'Eni</a> {/* hover:bg-[#bf950a] */}
                  {/*  <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-[#bf950a] hover:text-white">La potenza modiale</a> */}
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:var(--color-primary) hover:text-white">La morte</a> {/* hover:bg-[#bf950a] */}
                </div>
            </div>

      </nav>
    </div>
  );
}