"use client";
import { Turn as Hamburger } from "hamburger-react";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <Hamburger
        toggled={mobileNavOpen}
        toggle={setMobileNavOpen}
        color="#082f49"
      />

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full pb-3 h-50vh z-20 left-0 w-full overflow-scroll bg-gradient-to-r from-custom-900/90 from-20% via-custom-600/95 via-70% to-custom-500/95 to-90%"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link
                href="/"
                className="flex font-medium w-full text-white hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="flex font-medium w-full text-white hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="flex font-medium w-full text-white hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex font-medium w-full text-white hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
