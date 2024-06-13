import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8 sm:-mt-8 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl block-big-title">Entre em contato</h2>
            <p className="mt-4 text-secondaryText leading-loose">
              Se você tiver alguma dúvida ou precisar de mais informações, não hesite em nos contatar.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-primaryText mb-2">Nome</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border main-border-gray bg-bgDark3 text-primaryText"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-primaryText mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border main-border-gray bg-bgDark3 text-primaryText"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-primaryText mb-2">Mensagem</label>
                    <textarea
                      name="message"
                      id="message"
                      className="w-full px-4 py-2 rounded-lg border main-border-gray bg-bgDark3 text-primaryText"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-1/2 py-3 mt-4 mb-16 bg-primaryColor rounded-lg text-white hover:bg-secondaryColor transition duration-300"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl text-primaryText mb-4">Obrigado!</h3>
                  <p className="text-secondaryText leading-loose">
                    Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
