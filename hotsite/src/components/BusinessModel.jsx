import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/images/icons/CheckArrowIcon";

const saasFeatures = [
  "Licenciamento por período de uso",
  "Precificação de acordo com a classe de atendimento da instituição",
  "Escalabilidade conforme o crescimento do hospital ou clínica",
  "Suporte técnico contínuo e atualizações regulares incluídas",
];

export const BusinessModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="flex flex-wrap -mx-4 items-center mt-20">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 lg:justify-center">
                <div className="p-8 bg-bgDark3 rounded-3xl h-[35rem] lg:h-[40rem]">
                  <h3 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-center">
                    Solução como Serviço (SaaS)
                  </h3>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-300 leading-loose text-center">
                    Oferecemos uma solução flexível baseada em SaaS para hospitais e clínicas.
                  </p>
                  <ul className="mb-14 text-primaryText">
                    {saasFeatures.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block mx-auto text-center py-2 px-4 w-1/2 lg:w-full contained-button bg-primaryColor hover:bg-secondaryColor mt-20"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Lista de espera"
                  >
                    Lista de espera
                  </button>
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
