"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      className="dark:bg-white/6 bg-white border-t dark:border-white/6 border-slate-200 pt-10 dark:text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-slate-200 dark:border-white/10">
          <div>
            <Image
              src="/pandaIcon.svg"
              alt="logo"
              className="h-8"
              height={8}
              width={100}
            />
            <p className="max-w-[410px] mt-6 text-sm leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              illum voluptatum unde aut ullam voluptas ea iusto laudantium
              similique sequi labore officia, sint dolor amet consectetur
              consequatur nostrum omnis?
            </p>
          </div>
        </div>
        <p className="py-4 text-center text-sm dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link href="/">Daniel Bueno Navarro</Link>. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
