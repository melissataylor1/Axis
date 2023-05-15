import React from "react";
import Link from "next/link";

import { useState, useEffect } from 'react'

import Logo from './Logo'

import MobileMenu from './MobileNav'
export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])
  return (
    <header className={`bg-gradient-to-r from-custom-900/90 from-20% via-custom-600/95 via-70% to-custom-500/95 to-90% fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out shadow-lg lg:py-2 ${!top ? ' backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center tracking-widest text-base font-semibold ">
              <li>
                <Link href="/" className="link link-underline link-underline-black text-white hover:text-amber-400 md:mx-1 md:px-2 lg:mx-3 lg:px-3 lg:py-3 flex items-center lg:text-lg">Home</Link>
              </li>
              <li>
                <Link href="/about" className= "link link-underline link-underline-black  text-white  hover:text-amber-400 md:mx-1 md:px-2 lg:mx-3 lg:px-3 lg:py-3 flex items-center lg:text-lg">About</Link>
              </li>
              <li>
                <Link href="/services" className="link link-underline link-underline-black  text-white hover:text-amber-400 md:mx-1 md:px-2 lg:mx-3 lg:px-3 lg:py-3 flex items-center lg:text-lg">Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="link link-underline link-underline-black  text-white  hover:text-amber-400 md:mx-1 md:px-2 lg:mx-3 lg:px-3 lg:py-3 flex items-center lg:text-lg ">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="link link-underline link-underline-black  text-white  hover:text-amber-400 md:mx-1 md:px-2 lg:mx-3 lg:px-3 lg:py-3 flex items-center lg:text-lg">Contact</Link>
              </li>
             
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
