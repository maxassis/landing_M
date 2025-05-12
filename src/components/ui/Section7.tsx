"use client";
import * as motion from "motion/react-client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Section7() {
  return (
    <div className="px-5 bg-background pt-12 md:pt-16 pb-16 md:pb-20">
      <div className="max-w-[90rem] w-full mx-auto">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "linear", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 id="faq" className="text-primary font-bold">
            FAQ
          </h4>
          <h2 className="text-4xl text-white mb-3 font-bold">
            As perguntas mais frequentes
          </h2>

          <p className="text-white max-w-[53.13rem] mb-10">
            Aqui você pode encontrar as perguntas mais frequentes sobre o Agente
            NR01 Psicossocial e dúvidas relacionadas. Não consegue encontrar o
            que está procurando? Entre em contato com nossa equipe e retire suas
            dúvidas
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "linear", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-primary text-xl font-bold">
                O que é o Agente NR01 da Fiter?
              </AccordionTrigger>
              <AccordionContent className="text-white text-base">
                O Agente NR01 é uma inteligência artificial desenvolvida pela
                Fiter para ajudar sua empresa a cumprir as exigências da Norma
                Regulamentadora nº 1 (NR-1), com foco em riscos psicossociais.
                Ele realiza automaticamente o inventário de riscos por cargo,
                analisa lesões e agravos à saúde mental, gera relatórios com
                recomendações e preenche a planilha oficial do PGR psicossocial.
                Tudo isso com base em neurociência, psicometria e ciência de
                dados, sem interferência de vieses humanos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primary text-xl font-bold">
                Como funciona o Agente NR01?
              </AccordionTrigger>
              <AccordionContent className="text-white text-base">
                Em apenas alguns cliques, o software analisa as funções de cada
                cargo, identifica riscos psicossociais com base em evidências e
                gera uma matriz de risco automatizada com diagnóstico técnico.
                Ele prescreve ações preventivas personalizadas fundamentadas em
                CIDs e evidências científicas, exporta a planilha oficial da
                NR-01 e relatórios em PDF, além de permitir o registro e
                acompanhamento das ações diretamente no painel. No plano
                Enterprise, também realiza medições anuais de clima, saúde
                mental, felicidade e FIT cultural, com devolutivas automatizadas
                para cada colaborador.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primary text-xl font-bold">
                Quais são os benefícios de usar o Agente NR01?
              </AccordionTrigger>
              <AccordionContent className="text-white text-base">
                A solução oferece conformidade técnica com a nova exigência da
                NR-1 no que diz respeito à gestão de riscos psicossociais,
                eliminando a necessidade de diagnósticos manuais e reduzindo
                significativamente tempo e custos operacionais. Com base em
                ciência de dados e evidências, o sistema fornece diagnósticos
                objetivos e livres de vieses humanos, além de gerar análises
                aprofundadas que revelam causas, efeitos e caminhos de ação
                claros. Os relatórios são automaticamente preparados para
                atender a auditorias, enquanto, no plano Enterprise com o módulo
                Pulse integrado, a ferramenta contribui diretamente para a
                melhoria do bem-estar, do clima organizacional e da saúde mental
                da equipe.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
