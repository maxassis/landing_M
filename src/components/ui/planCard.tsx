"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, CircleOff, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Benefit {
  label: string;
  tooltip?: string;
}

interface PlanCardProps {
  price: string;
  benefitsIncluded: Benefit[];
  benefitsNotIncluded?: Benefit[];
  buttonLabel?: string;
  bestPlan: boolean;
  planType: "Basic" | "Essencial" | "Pro";
  colaboradores: number;
  onColaboradoresChange?: (value: number) => void;
}

export default function PlanCard({
  price,
  benefitsIncluded,
  benefitsNotIncluded = [],
  buttonLabel = "Escolher Plano",
  bestPlan = false,
  planType,
  colaboradores,
  onColaboradoresChange,
}: PlanCardProps) {
  const [localColaboradores, setLocalColaboradores] = useState(colaboradores);
  const [calculatedPrice, setCalculatedPrice] = useState(price);

  // const handleLocalChange = (value: number) => {
  //   setLocalColaboradores(value);
  //   onColaboradoresChange(value);
  // };

  const handleLocalChange = (value: number) => {
    const limitado = Math.max(0, Math.min(value, 100));
    setLocalColaboradores(limitado);
    // onColaboradoresChange(limitado);
  };

  useEffect(() => {
    const basePrice = parseFloat(price.replace(",", "."));
    let finalPrice = basePrice;

    if (planType === "Basic") {
      const inclusosCargos = 15;
      if (localColaboradores > inclusosCargos) {
        const cargosAdicionais = localColaboradores - inclusosCargos;
        finalPrice = basePrice + cargosAdicionais * 3.54;
      }
    } else if (planType === "Essencial") {
      const inclusosCargos = 50;
      if (localColaboradores > inclusosCargos) {
        const cargosAdicionais = localColaboradores - inclusosCargos;
        finalPrice = basePrice + cargosAdicionais * 2.6;
      }
    } else if (planType === "Pro") {
      // const inclusosCargos = 100;
      // finalPrice = basePrice;
      // if (localColaboradores > inclusosCargos) {
      //   const cargosAdicionais = localColaboradores - inclusosCargos;
      //   finalPrice = basePrice + cargosAdicionais * 2.25; 
      // }
    }

    setCalculatedPrice(finalPrice.toFixed(2).replace(".", ","));
  }, [localColaboradores, price, planType]);

  const shouldUpgrade = () => {
    if (planType === "Basic" && localColaboradores > 26) {
      return "Recomendamos migrar para o plano Essencial";
    } else if (planType === "Essencial" && localColaboradores > 73) {
      return "Recomendamos migrar para o plano Pro";
    }
    return null;
  };

  const upgradeMessage = shouldUpgrade();

  return (
    <div className="flex flex-col h-full">
      <div
        className={`h-10 grid place-items-center text-white font-bold rounded-t-xl ${
          bestPlan ? "bg-primary visible" : "invisible"
        }`}
      >
        Mais vendido
      </div>

      <div
        className={`flex flex-col flex-grow px-7 py-11 rounded-b-xl ${
          bestPlan
            ? "border-2 border-primary shadow-lg"
            : "border border-muted-foreground rounded-t-xl"
        }`}
      >
        <h4 className="text-primary text-2xl font-bold">{planType}</h4>
        {/* <span className="text-popover">{description}</span> */}
        <div className="flex flex-row gap-2 mt-4 items-center">
          <span className="text-popover">Número de colaboradores</span>
          <input
             max={100}
            value={localColaboradores || ""}
            onChange={(e) => handleLocalChange(Number(e.target.value))}
            className="text-popover h-10 no-spinner flex-1 w-[150px] border rounded-md border-muted-foreground px-3 py-2 text-base ring-offset-background "
            type="number"
          />
        </div>

        <div className="mt-8">
          <span className="text-popover block">A partir de</span>
          <span className="text-popover">R$</span>
          <span className="text-5xl font-bold text-popover">
            {calculatedPrice}
          </span>
          <span className="text-popover">/mês</span>
        </div>

        {upgradeMessage && (
          <div className="mt-4 text-chart-5 text-sm">{upgradeMessage}</div>
        )}

        <button
          className={`border-2 mt-6 cursor-pointer border-primary w-full font-bold py-2 px-4 rounded-full transition-colors duration-300 ${
            bestPlan
              ? "bg-primary text-white hover:bg-blue-700"
              : "text-primary hover:bg-blue-700 hover:text-white"
          }`}
        >
          {buttonLabel}
        </button>

        <span className="block text-[12px] text-center text-popover mt-5">
          Renova mensalmente. Cancele quando quiser.
        </span>

        <Separator className="bg-muted-foreground my-6" />

        <ul className="flex-1">
          {benefitsIncluded.map(({ label, tooltip }, idx) => (
            <li key={idx} className="flex items-start mb-3">
              <BadgeCheck className="text-primary mr-4 w-6 h-6 shrink-0" />
              <div className="flex items-center text-popover">
                <span className="text-sm md:text-base text-popover">
                  {label}
                  {tooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info
                            color="gray"
                            size={14}
                            className="cursor-pointer hidden md:inline ml-[4px]"
                          />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p className="text-white">{tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </span>
              </div>
            </li>
          ))}

          {benefitsNotIncluded.map(({ label, tooltip }, idx) => (
            <li key={idx} className="flex items-start mb-3">
              <CircleOff
                className="text-primary mr-4 w-6 h-6 shrink-0"
                color="#9f9fa9"
              />
              <div className="flex flex-wrap items-center text-muted-foreground gap-1 line-through">
                <span>{label}</span>
                {tooltip && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info
                          color="gray"
                          size={14}
                          className="cursor-pointer hidden md:inline"
                        />
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p className="text-white">{tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
