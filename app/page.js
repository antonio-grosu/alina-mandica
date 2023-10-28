import Image from "next/image";
import HomeHero from "./components/Home/HomeHero";
import Ajutor from "./components/Home/Ajutor";
import Descriere from "./components/Home/Descriere";
export default function Home() {
  return (
    <div>
      <HomeHero />
      <Ajutor />
      <Descriere />
    </div>
  );
}
