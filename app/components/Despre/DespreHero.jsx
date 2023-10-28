import Image from "next/image";
function DespreHero() {
  return (
    <div className=" flex flex-col md:flex-row md:justify-between items-center text-teal-950">
      <div className="md:w-4/12">
        <h1 className="text-4xl title">Despre mine . . .</h1>
        <div className="block md:hidden w-full mt-6">
          <Image src="/psiholog-image.svg" width={800} height={0}></Image>
        </div>
        <p className="text mt-6">
          Numele meu este Alina-Loredana Măndică, sunt psiholog cu drept de
          liberă practică, acreditat de Colegiul Psihologilor din România, cu
          competențe în psihologie clinică și psihoterapie
          cognitiv-comportamentală.
        </p>
      </div>
      <Image
        src="/psiholog-image.svg"
        width={400}
        height={0}
        className="w-3/12 md:block hidden"
      />
    </div>
  );
}

export default DespreHero;
