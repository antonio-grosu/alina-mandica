import Image from "next/image";

function Descrire() {
  return (
    <div className="grid grid-cols-1 my-24 gap-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Image
          className="w-full  md:hidden border-4 border-teal-500 rounded-md"
          src="conf-image.svg"
          width={600}
          height={0}
        />
        <Image
          className="w-5/12 md:block hidden border-4 border-teal-500 rounded-md"
          src="conf-image.svg"
          width={600}
          height={0}
        />
        <p className="text md:w-1/3 mt-8 md:mt-0 text-teal-950">
          Mulți oameni aleg să rămână în zona de confort, chiar dacă nu se simt
          bine așa: e o stare de rău aflată sub un control aparent, fiindu-le
          doar familiară. Dar teama de necunoscut este mai puternică decât
          nevoia interioară.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Image
          className="w-full md:hidden  border-4 border-teal-500 rounded-md"
          src="therapy-image.svg"
          width={600}
          height={0}
        />
        <p className="text md:w-1/3 mt-8 md:mt-0 text-teal-950">
          Decizia schimbării nu este una ușoară, dar pentru tine a venit timpul
          ca întrebările care te frământă de ceva vreme să își găsească în
          sfârșit răspunsul. Te felicit și mă bucur tare mult că te-ai hotărât!
        </p>
        <Image
          className="w-5/12 hidden md:block border-4 border-teal-500 rounded-md"
          src="therapy-image.svg"
          width={600}
          height={0}
        />
      </div>
    </div>
  );
}

export default Descrire;
