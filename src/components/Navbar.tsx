"use client";

import { Links } from "@/lib/constants";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  const sideMenuRef = useRef<null | HTMLUListElement>(null);
  const navRef = useRef<null | HTMLElement>(null);
  const navLinkRef = useRef<null | HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!navRef.current || !navLinkRef.current) return;

      if (scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:shadow-white/20",
          "dark:bg-transparent",
        );
        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:shadow-white/20",
          "dark:bg-transparent",
        );
        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      }
    });
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
    >
      <Link href="/">
        <Image
          src="/pandaIcon.svg"
          alt="Logo"
          className="w-24 cursor-pointer mr-14 border-b-4 border-slate-800 dark:border-slate-600 rounded-full"
          width={100}
          height={100}
        />
      </Link>

      <ul
        ref={navLinkRef}
        className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent "
      >
        {Links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Link
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30"
        >
          Contact
          <Image
            src="/assets/arrow-icon.png"
            alt=""
            className="w-3 dark:hidden"
            width={100}
            height={100}
          />
          <Image
            src="/assets/arrow-icon-dark.png"
            alt=""
            className="w-3 hidden dark:block"
            width={100}
            height={100}
          />
        </Link>

        <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image
            src="/assets/menu-black.png"
            alt=""
            className="w-6 dark:hidden"
            width={100}
            height={100}
          />
          <Image
            src="/assets/menu-white.png"
            alt=""
            className="w-6 hidden dark:block"
            width={100}
            height={100}
          />
        </button>
      </div>

      {/* -- ----- mobile menu ------  -- */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image
            src="/assets/close-black.png"
            alt=""
            className="w-5 cursor-pointer dark:hidden"
            width={100}
            height={100}
          />
          <Image
            src="/assets/close-white.png"
            alt=""
            className="w-5 cursor-pointer hidden dark:block"
            width={100}
            height={100}
          />
        </div>

        {Links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
