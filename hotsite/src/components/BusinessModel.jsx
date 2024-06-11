import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/images/icons/CheckArrowIcon";

const fastFeatures = [
  "Conjuntos de módulos para problemas específicos, como TrackCare (módulos de localização indoor e heatmap)",
  "Licenças para acessos aos módulos definidos",
  "Suporte técnico básico incluído no primeiro ano, com taxa recorrente nos anos subsequente.",
];

const completeSolutionFeatures = [
  "Todos os módulos disponíveis",
  "Licenciamento para hospitais de grande porte",
  "Suporte técnico 24/7",
  "Atualizações regulares",
];

const consultancyFeatures = [
  "Consultoria para seleção de módulos",
  "Implementação de módulos",
  "Licenciamento adaptado",
  "Suporte técnico especializado",
  "Consultoria contínua",
];

export const BusinessModel = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="business-model" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Descubra nossa abordagem</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Modelo de negócios
              </h2>
              <p className="mb-6 text-secondaryText">
                Explore como entregamos valor aos nossos clientes através do nosso modelo de negócios inovador.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl md:h-[40rem]">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Implementação rápida
                  </h3>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Pacotes de implantação rápida com módulos especificos pré-configurados.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {fastFeatures.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-bgDark3 rounded-3xl md:h-[40rem]">
                  <h3 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-left">
                    Solução completa
                  </h3>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Inclui todos os módulos disponíveis para uma solução abrangente.
                  </p>
                  <ul className="mb-14 text-primaryText">
                    {completeSolutionFeatures.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full contained-button leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Lista de espera"
                  >
                    Lista de espera
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl md:h-[40rem]">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Consultoria especializada
                  </h3>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Serviços de consultoria para seleção e implementação de módulos.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {consultancyFeatures.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
