import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import feature7 from "../assets/images/feature7.png";
import feature8 from "../assets/images/feature8.png";
import feature9 from "../assets/images/feature9.png";
import { CheckArrowIcon } from "../assets/images/icons/CheckArrowIcon";

export const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1" id="about-us">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1  fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="block-subtitle">Nossa missão</span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl block-big-title">
              Capacitando hospitais com tecnologia de ponta
            </h2>
            <p className="lg:mb-16 text-secondaryText leading-loose">
              Na HealthFlow, estamos comprometidos em transformar a gestão hospitalar através de tecnologias inovadoras. Nosso objetivo é proporcionar uma experiência hospitalar mais eficiente e satisfatória tanto para pacientes, quanto para gestores e profissionais de saúde.
            </p>
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto py-8 sm:pt-16 lg:pt-0">
            <img
              src={feature7.src}
              alt="Feature 7"
              className="rounded-xl  main-border-gray"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
     >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={feature8.src}
                alt="Feature 8"
                className="rounded-xl main-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={feature9.src}
                alt="Feature 9"
                className="rounded-xl  main-border-gray"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">Nossa visão</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Transformando o futuro da gestão hospitalar
            </h2>
            <p className="lg:mb-12 text-secondaryText leading-loose">
              Na HealthFlow, nossa missão é transformar a gestão hospitalar por meio da inovação e tecnologia. Estamos comprometidos em proporcionar soluções avançadas baseadas em Inteligência Artificial que antecipem demandas, otimizem recursos e melhorem significativamente a qualidade do atendimento em hospitais e clínicas ao redor do mundo. Buscamos não apenas resolver desafios operacionais complexos, mas também promover uma gestão hospitalar mais eficiente e humanizada, contribuindo para o bem-estar dos pacientes e a excelência dos serviços de saúde.
            </p>
          </div>
        </div>
      </div>
    </motion.div>

      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
