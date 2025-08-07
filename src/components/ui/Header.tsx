"use client";
import { useState, useEffect, useRef, RefObject } from "react";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(0);
  const mobileHeaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const updateMobileHeaderHeight = () => {
      if (mobileHeaderRef.current) {
        setMobileHeaderHeight(mobileHeaderRef.current.offsetHeight);
      }
    };

    const resizeObserver = new ResizeObserver(updateMobileHeaderHeight);
    if (mobileHeaderRef.current) {
      resizeObserver.observe(mobileHeaderRef.current);
    }

    updateMobileHeaderHeight();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateMobileHeaderHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMobileHeaderHeight);
      if (mobileHeaderRef.current) {
        resizeObserver.unobserve(mobileHeaderRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className={`${isFixed ? "h-[3.13rem]" : ""} hidden lg:block`}></div>

      <header
        className={`
    ${
      isFixed
        ? "fixed h-[50px] top-0 left-0 right-0 z-50 shadow-md rounded-b-2xl translate-y-0"
        : "relative rounded-2xl translate-y-2 top-3"
    }
     overflow-hidden h-[5.31rem] pr-8 max-w-[90rem] w-full mx-auto hidden lg:flex items-center justify-between
    transition-all duration-400 ease-linear bg-[#1c388e80]
  `}
      >
        <div className="items-center gap-1 h-full flex">
          <div className="w-[8.31rem] h-full flex items-center justify-center bg-primary text-white font-bold">
            Mx
          </div>
        </div>

        <ul className="items-center gap-8 flex">
          <li>
            <a
              href="#sobre"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#beneficios"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Benefícios
            </a>
          </li>
          <li>
            <a
              href="#processo"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Como Funciona
            </a>
          </li>
          <li>
            <a
              href="#depoimentos"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Depoimentos
            </a>
          </li>
          <li>
            <a
              href="#parceiros"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Parceiros
            </a>
          </li>
          <li>
            <a
              href="#planos"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Planos
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              FAQ
            </a>
          </li>
        </ul>

        <button
          className={`bg-primary rounded-xl text-white px-5 flex
            cursor-pointer hover:bg-blue-700 transition-colors duration-300
          ${isFixed ? "py-1" : "py-3"}
          `}
        >
          Entrar em contato
        </button>
      </header>

      <div
        className="lg:hidden"
        style={{
          height: mobileHeaderHeight ? `${mobileHeaderHeight}px` : "auto",
        }}
      ></div>

      <header
        ref={mobileHeaderRef as RefObject<HTMLDivElement>}
        className="flex pb-1.5 px-1 flex-wrap items-center justify-around gap-1 lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#1c388e80] shadow-md"
      >
        <div className="font-bold m-0 p-0 w-full text-center">Mx</div>
        <a
          href="#sobre"
          className="px-2.5 py-1 bg-primary text-white text-sm rounded-xl grid place-items-center"
        >
          Sobre
        </a>
        <a
          href="#faq"
          className="px-2.5 py-1 bg-primary text-white text-sm rounded-xl grid place-items-center"
        >
          FAQ
        </a>
        <a
          href="#beneficios"
          className="px-2.5 py-1 bg-primary text-white text-sm rounded-xl grid place-items-center"
        >
          Benefícios
        </a>
        <a
          href="#processo"
          className="px-2.5 py-1 bg-primary text-white text-sm rounded-xl grid place-items-center"
        >
          Funcionamento
        </a>
        <a
          href="#depoimentos"
          className="px-2.5 py-1 bg-primary text-white text-sm rounded-xl grid place-items-center"
        >
          Depoimentos
        </a>
        <a
          href="#parceiros"
          className="px-2.5 py-1 bg-primary text-white text-sm rounded-xl grid place-items-center"
        >
          Parceiros
        </a>
        <a
          href="#planos"
          className="px-2.5 py-1 bg-primary text-white text-sm rounded-xl grid place-items-center"
        >
          Planos
        </a>
        <a className="px-2.5 py-1 bg-primary text-white text-sm rounded-xl grid place-items-center">
          Contato
        </a>
      </header>
    </>
  );
}
