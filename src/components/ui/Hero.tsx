"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";
import useLenis from "../../utils/useLenis"; // <- certifique-se que o caminho está correto

export default function Hero() {
  const lenis = useLenis();

  const handleScrollToPlanos = () => {
    const target = document.querySelector("#planos");
    if (target && lenis) {
      const header =
        document.querySelector("header.lg\\:flex") ||
        document.querySelector("header.lg\\:hidden");
      const offset = header ? -header.clientHeight : 0;
      lenis.scrollTo(target as HTMLElement, { offset });
    }
  };

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "linear" }}
      viewport={{ once: true }}
    >
      <div className="px-5 bg-background mt-11">
        <div className="h-auto lg:h-[44.8rem] max-w-[90rem] w-full mx-auto rounded-4xl overflow bg-primary grid grid-cols-1 md:grid-cols-2 ">
          <div className="p-8 lg:p-16">
            <h1 className="text-4xl font-bold mb-6 md:text-5xl">
              Inteligência Artificial e Saúde Mental Integradas
            </h1>

            <p className="text-[1.12rem]">
              Automatize o diagnóstico de riscos psicossociais com inovação e
              segurança.
            </p>

            <button
              onClick={handleScrollToPlanos}
              className="mt-10 px-5 py-5 bg-background hover:bg-gray-800 transition-colors duration-300 rounded-xl text-white flex gap-4 cursor-pointer"
            >
              Quero conhecer
              <ArrowUpRight />
            </button>
          </div>

          <Image
            src="/images/hero.webp"
            alt="Banner bonito"
            width={500}
            height={500}
            quality={100}
            className="object-cover h-full w-full rounded-bl-4xl rounded-br-4xl rounded-tr-4xl hidden md:block"
            unoptimized
          />
        </div>
      </div>
    </motion.div>
  );
}
