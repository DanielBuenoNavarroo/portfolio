import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <Image
        src="/assets/profile-img.png"
        alt=""
        className="rounded-full w-32"
        width={100}
        height={100}
      />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Daniel Bueno
        <Image
          src="/assets/hand-icon.png"
          alt=""
          className="w-6 mb-1"
          width={100}
          height={100}
        />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Web developer based in Madrid.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a junior web developer from Madrid, Spain with 1 year of
        experience.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link
          href="#contact"
          className="w-48 px-10 py-2.5 border rounded-full bg-linear-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center justify-center gap-2 dark:border-transparent group"
        >
          contact me{" "}
          <Image
            src="/assets/right-arrow-white.png"
            alt=""
            className="w-4 group-hover:trnasform group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
            width={100}
            height={100}
          />
        </Link>

        <Link
          href="../../dev-icon.png"
          download
          className="w-48 px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center justify-center gap-2 bg-white dark:bg-transparent dark:text-white"
        >
          my resume{" "}
          <Image
            src="/assets/download-icon.png"
            alt=""
            className="w-4 dark:invert"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
};
