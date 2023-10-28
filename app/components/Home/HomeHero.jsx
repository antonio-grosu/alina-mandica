import Image from "next/image";
function HomeHero() {
  return (
    <div className=" flex flex-col md:flex-row md:justify-between items-center text-teal-950">
      <div className="md:w-4/12">
        <h1 className="text-4xl title">
          Decizia schimbării nu este ușoară . . .
        </h1>
        <div className="block md:hidden w-full mt-6">
          <Image src="/hero-image.svg" width={800} height={0}></Image>
        </div>
        <p className="text mt-6">
          Faptul că citești aceste rânduri înseamnă că simți deja că ceva nu
          este în regulă și ai ales să faci primul pas spre starea ta de bine.
        </p>
        <a
          href="/terapie"
          className="bg-teal-500 rounded-md cursor-pointer  text-teal-50 text text-center px-4 py-2 mt-6   block md:inline-block"
        >
          Hai să vorbim
        </a>
      </div>
      <div className="hidden md:block w-5/12">
        <Image src="/hero-image.svg" width={400} height={0}></Image>
      </div>
    </div>
  );
}
export default HomeHero;
