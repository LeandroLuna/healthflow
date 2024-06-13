import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Quais hospitais podem se beneficiar da solução da HealthFlow?",
    answer:
      "Nossa solução é adequada para hospitais de todos os tamanhos, desde pequenas clínicas até grandes centros médicos. Qualquer instituição que queira melhorar a eficiência operacional e a experiência dos pacientes pode se beneficiar das nossas ferramentas.",
  },
  {
    question: "O sistema da HealthFlow é compatível com outros sistemas hospitalares?",
    answer:
      "Sim, nossa solução foi projetada para integrar-se perfeitamente com sistemas hospitalares existentes, como EHRs (Electronic Health Records). Isso facilita a implementação e garante uma operação contínua.",
  },
  {
    question: "Quais são os requisitos para instalar a solução da HealthFlow?",
    answer:
      "A instalação da nossa solução requer a implementação de beacons, dependendo dos módulos selecionados, e a configuração de nossa plataforma de software. Nossa equipe de suporte fornecerá todas as orientações necessárias e estará disponível para ajudar durante todo o processo de instalação.",
  },
  {
    question: "Como posso obter suporte para o produto?",
    answer:
      "Nossa dedicada equipe de suporte está aqui para ajudar. Você pode nos contatar através do formulário de contato em nosso site, enviar um e-mail ou conversar conosco via chat ao vivo. Ficaremos felizes em ajudar com quaisquer perguntas ou preocupações que você possa ter.",
  },
  {
    question: "Como é garantida a segurança dos dados coletados?",
    answer:
      "Levamos a segurança dos dados muito a sério. Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas da indústria para proteger todas as informações coletadas e processadas por nossa solução.",
  },
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-bgDark1 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Tem alguma pergunta?</p>
          <h2 className="mb-16 block-big-title text-center">
            Perguntas frequentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="rgb(20, 148, 255)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
