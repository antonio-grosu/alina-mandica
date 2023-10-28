import Image from "next/image";
function Ajutor() {
  return (
    <div className="mt-24">
      <h1 className="text-4xl title text-teal-950 w-full text-center">
        De ce și cum te pot ajuta
      </h1>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
        <div className="text-teal-950 relative  ">
          <p className="text px-4 py-1 inline-block absolute  left-8 top-8 bg-teal-300 rounded-tr-md rounded-br-md rounded-tl-md">
            Te înțeleg
          </p>
          <p className="text px-4 py-1 inline-block  absolute left-16 top-24 bg-teal-300 rounded-tr-md rounded-br-md rounded-tl-md">
            Nu te judec
          </p>
          <p className="text px-4 py-1 inline-block absolute left-4 top-48 bg-teal-300 rounded-tr-md rounded-br-md rounded-tl-md">
            Nu mă tem de emoții
          </p>
          <p className="text px-4 py-1 inline-block absolute left-24 top-60 bg-teal-300 rounded-tr-md rounded-br-md rounded-tl-md">
            Am luptat pentru schimbare
          </p>
          <p className="text px-4 py-1 inline-block absolute  right-4 top-0 md:hidden bg-purple-200 rounded-lr-md rounded-bl-md rounded-tr-md">
            Anxietate
          </p>
          <p className="text px-4 py-1 inline-block  absolute right-4 top-12 md:hidden bg-purple-200 rounded-lr-md rounded-bl-md rounded-tr-md">
            Emoții copleșitoare
          </p>
          <p className="text px-4 py-1 inline-block absolute right-12 top-36 md:hidden bg-purple-200 rounded-lr-md rounded-bl-md rounded-tr-md">
            Depresie
          </p>
          <p className="text px-4 py-1 inline-block absolute right-36 top-24 md:hidden bg-purple-200 rounded-lr-md rounded-bl-md rounded-tr-md">
            Stimă de sine scăzută
          </p>
        </div>
        <Image
          src="/heart.svg"
          className="w-full mx-auto"
          width={400}
          height={0}
        />
        <div className="text-teal-950 relative hidden md:block">
          <p className="text px-4 py-1 inline-block absolute   right-4 top-0  bg-purple-200 rounded-tr-md rounded-br-md rounded-tl-md">
            Anxietate
          </p>
          <p className="text px-4 py-1 inline-block  absolute right-8 top-16  bg-purple-200 rounded-tr-md rounded-br-md rounded-tl-md">
            Emoții copleșitoare
          </p>
          <p className="text px-4 py-1 inline-block absolute right-16 top-36  bg-purple-200 rounded-tr-md rounded-br-md rounded-tl-md">
            Depresie
          </p>
          <p className="text px-4 py-1 inline-block absolute right-24 top-56  bg-purple-200 rounded-tr-md rounded-br-md rounded-tl-md">
            Stimă de sine scăzută
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ajutor;
