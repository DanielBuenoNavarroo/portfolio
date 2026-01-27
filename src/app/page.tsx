import About from "@/components/About";
import { Header } from "@/components/Header";
import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Header />
      <About />
    </>
  );
}
