"use client";

import { useState } from "react";
function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="px-8  bg-teal-100 z-10 md:px-16 lg:px-32 xl:px-36 2xl:px-96 w-full fixed top-0  py-4 flex items-center justify-between">
      {menu && (
        <div className=" text absolute w-full h-screen top-0 left-0 bg-teal-50 py-4 px-8">
          <div className="flex items-center justify-between w-full ">
            <div href="/" className="flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-800 dark:text-teal-950"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 19V.352A3.451 3.451 0 0 0 7.5 0a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 2.04 6.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.016 4.016 0 0 0 .3 10.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 0 12a4.032 4.032 0 0 0 .107.889 4 4 0 0 0 .2.659c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.284.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 9 19Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 12.5 0a3.451 3.451 0 0 0-1.5.352V19a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 18 15.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
              </svg>
              <p className="text ml-2 mt-1">Psiholog Alina-Loredana Măndică</p>
            </div>
            <svg
              className="w-8 h-8 text-gray-800 dark:text-teal-950"
              onClick={() => {
                setMenu(!menu);
              }}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
          </div>
          <p className="title tracking-widest uppercase text-xl text-teal-950/50 mt-8">
            navigatie
          </p>
          <div className="grid grid-cols-1 w-full">
            <a
              href="/"
              className="text p-2 pl-0 text-teal-950 text-md mt-4"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              Home
            </a>
            <a
              href="/despre"
              className="text p-2 pl-0 text-teal-950 text-md mt-4"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              Despre
            </a>
            <a
              href="/terapie"
              className="text p-2 pl-0 text-teal-950 text-md mt-4"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              Terapie
            </a>
          </div>
          <p className="title tracking-widest uppercase text-xl text-teal-950/50 mt-8">
            Social media
          </p>
          <div className="grid grid-cols-1 w-full">
            <a
              href="/"
              className="text p-2 pl-0 text text-teal-950 text-md mt-4"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              Facebook
            </a>
          </div>
          <p className="title tracking-widest uppercase text-xl text-teal-950/50 mt-8">
            Contact
          </p>
          <div className="grid grid-cols-1 w-full">
            <a
              href="/"
              className="text p-2 pl-0 text text-teal-950 text-md mt-4"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              Email
            </a>
            <a
              href="/"
              className="text p-2 pl-0 text text-teal-950 text-md mt-4"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              +40 771 600 235
            </a>
          </div>
        </div>
      )}
      <a href="/" className="flex items-center justify-center">
        <svg
          className="w-8 h-8 text-gray-800 dark:text-teal-950"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 19V.352A3.451 3.451 0 0 0 7.5 0a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 2.04 6.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.016 4.016 0 0 0 .3 10.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 0 12a4.032 4.032 0 0 0 .107.889 4 4 0 0 0 .2.659c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.284.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 9 19Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 12.5 0a3.451 3.451 0 0 0-1.5.352V19a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 18 15.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
        </svg>
        <p className="text ml-2 mt-1">Psiholog Alina-Loredana Măndică</p>
      </a>
      <div className="hidden md:flex items-center justify-between w-3/12 p-4 ">
        <a href="/" className="text text-teal-950">
          Home
        </a>
        <a href="/despre" className="text text-teal-950">
          Despre
        </a>
        <a href="/terapie" className="text text-teal-950">
          Terapie
        </a>
      </div>
      <a
        href="/terapie"
        className="bg-teal-500  rounded-md cursor-pointer text-teal-50 text text-center px-4 py-2 hidden  md:inline-block"
      >
        Să începem
      </a>
      <svg
        onClick={() => {
          setMenu(!menu);
        }}
        className="w-6 h-6 text-gray-800 dark:text-teal-950 md:hidden"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </nav>
  );
}

export default Navbar;
