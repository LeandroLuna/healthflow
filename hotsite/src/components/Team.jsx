import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/images/icons/QuoteIcon";
import member1 from "../assets/images/member1.jpeg";
import member2 from "../assets/images/member2.jpeg";
import member3 from "../assets/images/member3.png";
import member4 from "../assets/images/member4.jpeg";

const membersData = [
  {
    name: "Gustavo Shiose",
    job: "COO & Co-founder",
    description: `Gustavo está cursando Engenharia de Computação na FIAP. Possui habilidades em C#, .NET, React e TypeScript.
      Atualmente, trabalha como estagiário no FI Group.`,
    image: member1,
  },
  {
    name: "Leandro Luna",
    job: "CTO & Co-founder",
    description: `Leandro é estudante de Engenharia da Computação com experiência em Angular 2+, Java, React, Python e DevOps.
      Ele possui certificações AWS e Azure, e está cursando MBA em IA e Big Data no ICMC-USP.
      Trabalhou como Desenvolvedor Junior, como Desenvolvedor Frontend e como Suporte Técnico na FIAP.`,
    image: member2,
  },
  {
    name: "Leonardo Chen",
    job: "CCO & Co-founder",
    description: "Leonardo é estudante de Engenharia da Computação na FIAP, focado em desenvolver habilidades práticas em diversas tecnologias.",
    image: member3,
  },
  {
    name: "Marcos Santos",
    job: "CPO & Co-founder",
    description: `Marcos é estudante de Engenharia de Computação com experiência em Java, React e JavaScript.
      Atuou como estagiário no Itaú Unibanco e como analista de sistema no Atacadão.
      Atualmente, trabalha como analista de dados no Itaú Unibanco.`,
    image: member4,
  },
];

export const Team = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="team" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">Equipe</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          Conheça-nos!
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {membersData.map((member, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4 h-[20rem] lg:h-[35rem] justify-between"
              key={`${member.name}-${index}`}
            >
              <div className="content-text-white">{member.description}</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4 justify-center">
                <div className="flex items-center">
                  <img
                    src={member.image.src}
                    alt="Member avatar"
                    width="45px"
                    height="5px"
                    className="rounded-full"
                    aria-label={member.name}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {member.name}
                  </div>
                  <div className="content-text-gray">
                    {member.job}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
