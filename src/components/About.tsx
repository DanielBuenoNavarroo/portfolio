"use client";

import { Data, Tools, fadeUp } from "@/lib/constants";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 className="text-center mb-2 text-lg font-Ovo" {...fadeUp()}>
        Introduction
      </motion.h4>
      <motion.h2
        {...fadeUp({ delay: 0.1 })}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-lg:hidden max-w-max mx-auto relative"></div>
        <div className="flex-1">
          <motion.p {...fadeUp()} className="mb-10 max-w-2xl font-Ovo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum
            aut fugit, quasi tempora repellat totam! Placeat libero eveniet in
            natus enim doloremque quasi suscipit iusto consequuntur voluptatem.
            Facilis, tenetur.
          </motion.p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {Data.map((data, i) => (
              <motion.li
                ref={(el) => {
                  refs.current[i] = el;
                }}
                {...fadeUp({ delay: 0.1 + i * 0.1 })}
                key={data.name}
                onAnimationComplete={() => {
                  const card = refs.current[i];
                  if (card) {
                    card.classList.add(
                      "transition",
                      "duration-500",
                      "hover:bg-lightHover",
                      "hover:-translate-y-1",
                      "hover:shadow-black",
                      "dark:hover:shadow-white/80",
                      "dark:hover:bg-darkHover/50",
                    );
                  }
                }}
                className="border not-dark:bg-white/40 border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer"
              >
                <>
                  <Image
                    src={data.icon1}
                    alt=""
                    className="w-7 mt-3 dark:hidden"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={data.icon2}
                    alt=""
                    className="w-7 mt-3 hidden dark:block"
                    width={100}
                    height={100}
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {data.name}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {data.description}
                  </p>
                </>
              </motion.li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools i use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {Tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  className="w-5 sm:w-7"
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
