"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { ChevronLeft, ChevronRight } from "lucide-react";
import PlanCard from "./planCard";

// interface Benefit {
//   label: string;
//   tooltip?: string;
// }

// interface PlanCardProps {
//   price: string;
//   benefitsIncluded: Benefit[];
//   benefitsNotIncluded?: Benefit[];
//   buttonLabel?: string;
//   bestPlan: boolean;
//   planType: "Basic" | "Essencial" | "Pro";
//   colaboradores: number;
//   onColaboradoresChange: (value: number) => void;
// }

const beneficiosBasicIncluidos = [
  { label: "Painel Fiter", tooltip: "Mais informações sobre Lorem Ipsum" },
  {
    label: "Inventário de riscos psicossociais",
    tooltip: "Detalhes sobre o recurso",
  },
  { label: "Exportação .xlsx", tooltip: "Descrição do benefício" },
  {
    label: "Exportação Layout (conformidade técnica/regulatória)",
    tooltip: "Detalhes sobre o recurso",
  },
  {
    label: "Agente de IA (prescrição automatizada de ações)",
    tooltip: "prescrição automatizada de ações",
  },
  {
    label:
      "Agente de IA (inserção inteligente de planos de ação e comentários)",
    tooltip: "Detalhes sobre o recurso",
  },
  { label: "Suporte com chatbot", tooltip: "Detalhes sobre o recurso" },
];

const beneficiosBasicNaoIncluidos = [
  { label: "Agente de IA (análise de score e recalibração dos riscos)" },
  { label: "Suporte com especialista" },
  { label: "Palestra digital anual (conformidade NR)" },
];

const beneficiosEssecialIncluidos = [
  { label: "Painel Fiter", tooltip: "Mais informações sobre Lorem Ipsum" },
  {
    label: "Inventário de riscos psicossociais",
    tooltip: "Detalhes sobre o recurso",
  },
  { label: "Exportação .xlsx", tooltip: "Descrição do benefício" },
  {
    label: "Exportação Layout (conformidade técnica/regulatória)",
    tooltip: "Detalhes sobre o recurso",
  },
  {
    label: "Agente de IA (prescrição automatizada de ações)",
    tooltip: "prescrição automatizada de ações",
  },
  {
    label:
      "Agente de IA (inserção inteligente de planos de ação e comentários)",
    tooltip: "Detalhes sobre o recurso",
  },
  {
    label: "Agente de IA (análise de score e recalibração dos riscos)",
    tooltip: "Detalhes sobre o recurso",
  },
  { label: "Suporte com chatbot", tooltip: "Detalhes sobre o recurso" },
];

const beneficiosEssecialNaoIncluidos = [
  { label: "Suporte com especialista" },
  { label: "Palestra digital anual (conformidade NR)" },
];

const beneficiosProIncluidos = [
  { label: "Painel Fiter", tooltip: "Mais informações sobre Lorem Ipsum" },
  {
    label: "Inventário de riscos psicossociais",
    tooltip: "Detalhes sobre o recurso",
  },
  { label: "Exportação .xlsx", tooltip: "Descrição do benefício" },
  {
    label: "Exportação Layout (conformidade técnica/regulatória)",
    tooltip: "Detalhes sobre o recurso",
  },
  {
    label: "Agente de IA (prescrição automatizada de ações)",
    tooltip: "prescrição automatizada de ações",
  },
  {
    label:
      "Agente de IA (inserção inteligente de planos de ação e comentários)",
    tooltip: "Detalhes sobre o recurso",
  },
  {
    label: "Agente de IA (análise de score e recalibração dos riscos)",
    tooltip: "Detalhes sobre o recurso",
  },
  { label: "Suporte com chatbot", tooltip: "Detalhes sobre o recurso" },
  { label: "Suporte com especialista" },
  { label: "Palestra digital anual (conformidade NR)" },
];

export default function Section6() {
  const [embla, setEmbla] = useState<CarouselApi | null>(null);

  const handleColaboradoresChange = (value: number) => {
  };

  return (
    <div className="px-5 bg-white pt-5 pb-16 md:pb-24">
      <div id="parceiros" className="max-w-[90rem] w-full mx-auto">
        <div className="lg:h-[16rem] bg-background rounded-4xl px-8 md:px-16 py-12 mb-10">
          <div className="flex flex-col justify-between items-left">
            <div>
              <h4 className="text-primary text-2xl">QUEM USA</h4>
              <h3 className="text-4xl mb-5">Empresas que confiam</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 mt-3 w-auto lg:w-[500px]">
              {["empresa1", "empresa2", "empresa3"].map((empresa, idx) => (
                <Image
                  key={idx}
                  src={`/${empresa}.png`}
                  alt={empresa}
                  width={100}
                  height={100}
                  quality={100}
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>

        <h2 id="planos" className="text-center text-2xl text-primary mt-2">PLANOS</h2>
        <h3 className="text-center text-black text-4xl font-bold mb-6 md:mb-18">
          Escolha o plano ideal para sua empresa
        </h3>

        <div className="relative block lg:hidden">
          <Carousel setApi={setEmbla} className="w-full">
            <CarouselContent>
              <CarouselItem className="basis-full">
                <PlanCard
                  planType="Basic"
                  bestPlan={false}
                  price="65,02"
                  benefitsIncluded={beneficiosBasicIncluidos}
                  benefitsNotIncluded={beneficiosBasicNaoIncluidos}
                  colaboradores={0}
                  onColaboradoresChange={handleColaboradoresChange}
                />
              </CarouselItem>
              <CarouselItem className="basis-full">
                <PlanCard
                  planType="Essencial"
                  bestPlan={true}
                  price="189,00"
                  benefitsIncluded={beneficiosEssecialIncluidos}
                  benefitsNotIncluded={beneficiosEssecialNaoIncluidos}
                  colaboradores={0}
                  onColaboradoresChange={handleColaboradoresChange}
                />
              </CarouselItem>
              <CarouselItem className="basis-full">
                <PlanCard
                  planType="Pro"
                  bestPlan={false}
                  price="319,01"
                  benefitsIncluded={beneficiosProIncluidos}
                  colaboradores={0}
                  onColaboradoresChange={handleColaboradoresChange}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <button
            onClick={() => embla?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow lg:hidden"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>

          <button
            onClick={() => embla?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow lg:hidden"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <PlanCard
            planType="Basic"
            bestPlan={false}
            price="65,02"
            benefitsIncluded={beneficiosBasicIncluidos}
            benefitsNotIncluded={beneficiosBasicNaoIncluidos}
            colaboradores={0}
            onColaboradoresChange={handleColaboradoresChange}
          />
          <PlanCard
            planType="Essencial"
            bestPlan={true}
            price="189,00"
            benefitsIncluded={beneficiosEssecialIncluidos}
            benefitsNotIncluded={beneficiosEssecialNaoIncluidos}
            colaboradores={0}
            onColaboradoresChange={handleColaboradoresChange}
          />
          <PlanCard
            planType="Pro"
            bestPlan={false}
            price="319,01"
            benefitsIncluded={beneficiosProIncluidos}
            colaboradores={0}
            onColaboradoresChange={handleColaboradoresChange}
          />
        </div>
      </div>
    </div>
  );
}

// export default function Section6() {
//   const [embla, setEmbla] = useState<CarouselApi | null>(null);
//   const [colaboradores, setColaboradores] = useState(0);

//   const handleColaboradoresChange = (value: number) => {
//     setColaboradores(value);
//   };

//   const getRecommendedPlan = () => {
//     if (colaboradores > 73) return "Pro";
//     if (colaboradores > 26) return "Essencial";
//     return "Basic";
//   };

//   const recommendedPlan = getRecommendedPlan();

//   return (
//     <div className="px-5 bg-white pt-5 pb-16 md:pb-24">
//       <div id="parceiros" className="max-w-[90rem] w-full mx-auto">
//         <div className="lg:h-[16rem] bg-background rounded-4xl px-8 md:px-16 py-12 mb-10">
//           <div className="flex flex-col justify-between items-left">
//             <div>
//               <h4 className="text-primary text-2xl">QUEM USA</h4>
//               <h3 className="text-4xl mb-5">Empresas que confiam</h3>
//             </div>
//             <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 mt-3 w-auto lg:w-[500px]">
//               {["empresa1", "empresa2", "empresa3"].map((empresa, idx) => (
//                 <Image
//                   key={idx}
//                   src={`/${empresa}.png`}
//                   alt={empresa}
//                   width={100}
//                   height={100}
//                   quality={100}
//                   unoptimized
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         <h2 id="planos" className="text-center text-2xl text-primary mt-2">
//           PLANOS
//         </h2>
//         <h3 className="text-center text-black text-4xl font-bold mb-6 md:mb-18">
//           Escolha o plano ideal para sua empresa
//         </h3>

//         <div className="relative block lg:hidden">
//           <Carousel setApi={setEmbla} className="w-full">
//             <CarouselContent>
//               {[
//                 {
//                   planType: "Basic" as const,
//                   price: "65,02",
//                   benefitsIncluded: beneficiosBasicIncluidos,
//                   benefitsNotIncluded: beneficiosBasicNaoIncluidos,
//                 },
//                 {
//                   planType: "Essencial" as const,
//                   price: "189,00",
//                   benefitsIncluded: beneficiosEssecialIncluidos,
//                   benefitsNotIncluded: beneficiosEssecialNaoIncluidos,
//                 },
//                 {
//                   planType: "Pro" as const,
//                   price: "319,01",
//                   benefitsIncluded: beneficiosProIncluidos,
//                 },
//               ].map((plan) => (
//                 <CarouselItem className="basis-full" key={plan.planType}>
//                   <PlanCard
//                     {...plan}
//                     bestPlan={recommendedPlan === plan.planType}
//                     colaboradores={colaboradores}
//                     onColaboradoresChange={handleColaboradoresChange}
//                   />
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <button
//               onClick={() => embla?.scrollPrev()}
//               className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow lg:hidden"
//             >
//               <ChevronLeft className="w-5 h-5 text-primary" />
//             </button>

//             <button
//               onClick={() => embla?.scrollNext()}
//               className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow lg:hidden"
//             >
//               <ChevronRight className="w-5 h-5 text-primary" />
//             </button>
//           </Carousel>
//         </div>

//         <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
//           {[
//             {
//               planType: "Basic" as const,
//               price: "65,02",
//               benefitsIncluded: beneficiosBasicIncluidos,
//               benefitsNotIncluded: beneficiosBasicNaoIncluidos,
//             },
//             {
//               planType: "Essencial" as const,
//               price: "189,00",
//               benefitsIncluded: beneficiosEssecialIncluidos,
//               benefitsNotIncluded: beneficiosEssecialNaoIncluidos,
//             },
//             {
//               planType: "Pro" as const,
//               price: "319,01",
//               benefitsIncluded: beneficiosProIncluidos,
//             },
//           ].map((plan) => (
//             <PlanCard
//               key={plan.planType}
//               {...plan}
//               bestPlan={recommendedPlan === plan.planType}
//               colaboradores={colaboradores}
//               onColaboradoresChange={handleColaboradoresChange}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
