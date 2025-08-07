"use client";

import * as motion from "motion/react-client";

export default function Section1() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "linear" }}
      viewport={{ once: true, amount: 0 }}
    >
      <div className="px-5">
        <div id="sobre" className="max-w-[90rem] w-full mx-auto">
          <div className="w-full bg-white rounded-4xl mt-[2rem] lg:mt-[5rem] p-8 md:py-16 md:pl-22 md:pr-80">
            <h3 className="text-primary text-2xl mb-3">
              SOBRE O AGENTE PSICOSSOCIAL
            </h3>

            <h1 className="text-4xl text-popover font-bold mb-3">
              O que e Psicossocial
            </h1>

            <p className="text-popover text-lg md:text-xl">
              O Agente é a inteligência artificial da desenvolvida para atender
              – Anexo de Riscos Psicossociais. Automatizamos o diagnóstico dos
              riscos psicossociais dos cargos, gerando laudos e planilhas
              prontos em tempo real, com análise baseada em CID, fatores de
              risco e diretrizes da OMS. Nosso sistema assegura conformidade
              legal, proteção aos colaboradores e eficiência estratégica para RH
              e SESMT, sempre atualizado conforme as exigências legais.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
