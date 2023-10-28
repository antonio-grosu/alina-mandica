function Footer() {
  return (
    <footer className="my-32 text-teal-950 px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 w-full grid gap-4 grid-cols-1  md:grid-cols-4">
      <div>
        <div className="flex items-start md:justify-center justify-start">
          <svg
            className="w-8 h-8 text-gray-800 dark:text-teal-950"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 19V.352A3.451 3.451 0 0 0 7.5 0a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 2.04 6.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.016 4.016 0 0 0 .3 10.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 0 12a4.032 4.032 0 0 0 .107.889 4 4 0 0 0 .2.659c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.284.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 9 19Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 12.5 0a3.451 3.451 0 0 0-1.5.352V19a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 18 15.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
          </svg>
          <p className="text ml-4 mt-1">Psiholog Alina-Loredana Măndică</p>
        </div>
        <p className="text mt-4 text-teal-950/50 italic font-bold">
          &quotImplicarea în evenimentele trecute este înnoită cu scopul de a
          ține incă vii resursele emoționale investite&quot (Albert Ellis).
        </p>
      </div>
      <div className=" flex flex-col md:items-center justify-start">
        <h3 className="title text-xl mb-3">Social Media</h3>
        <a href="" className="p-1 text ">
          Facebook
        </a>
      </div>
      <div className="  flex flex-col md:items-center justify-start">
        <h3 className="title text-xl mb-3">Navigatie</h3>
        <a href="/" className="text p-1">
          Home
        </a>
        <a href="/despre" className="text p-1">
          Despre Mine
        </a>
        <a href="/terapie" className="text p-1">
          Terapie
        </a>
      </div>
      <div className=" flex flex-col md:items-center justify-start">
        <h3 className="title text-xl mb-3">Contact</h3>
        <a href="" className="p-1 text">
          Email
        </a>
        <a href="" className="p-1 text">
          +40 771 600 235
        </a>
      </div>
    </footer>
  );
}

export default Footer;
