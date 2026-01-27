import About from "@/components/About";
import { Header } from "@/components/Header";
import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import SoftBackdrop from "@/components/SoftBackdrop";

export default function Home() {
  return (
    <>
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />
      <Header />
      <About />
    </>
  );
}
