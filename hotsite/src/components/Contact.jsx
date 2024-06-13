import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
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
      className="w-screen flex justify-center bg-bgDark2 relative"
    >
      <div className="absolute -top-16" id="contact" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="block-subtitle text-center mb-6">Fale conosco</div>
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
                    <label htmlFor="institution" className="block text-primaryText mb-2">Instituição</label>
                    <input
                      type="text"
                      name="institution"
                      id="institution"
                      className="w-full px-4 py-2 rounded-lg border main-border-gray bg-bgDark3 text-primaryText"
                      value={formData.institution}
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
                      className="w-1/2 py-2 px-4 mt-4 contained-button"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center border border-primaryColor p-8 border-dashed">
                  <h3 className="text-2xl text-primaryText mb-4">Obrigado!</h3>
                  <p className="text-secondaryText leading-loose">
                    Sua mensagem foi enviada com sucesso. Entraremos em contato em breve. ;)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      </div>
      
    </section>
  );
};
