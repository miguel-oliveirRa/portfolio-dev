import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutMe: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="w-full max-w-2xl xl:max-w-3xl mx-auto mb-8 py-6 px-2 sm:py-10 sm:px-4 text-center bg-gray-950 rounded-2xl shadow-xl"
    aria-labelledby="aboutme-title"
  >
    <img
      src="/assets/foto-project.jpg"
      alt="Foto de Miguel Oliveira sorrindo, usando camiseta escura, fundo claro."
      className="mx-auto mb-6 rounded-full w-32 h-32 sm:w-44 sm:h-44 object-cover shadow-lg border-4 border-blue-200"
    />
    <h2
      id="aboutme-title"
      className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-500"
    >
      Sobre Mim
    </h2>
    <p className="text-base sm:text-lg text-gray-200">
      Olá! Meu nome é Miguel. Sou desenvolvedor apaixonado por tecnologia,
      especializado em criar soluções modernas e eficientes. Aqui você encontra
      meus principais projetos, e meus contatos.
    </p>
    <div className="mt-8 flex justify-center gap-4 sm:gap-6">
      <a
        href="https://www.linkedin.com/in/miguel-oliveira-castro"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-sky-600 hover:text-sky-400 focus-visible:ring-2 focus-visible:ring-sky-400 focus:outline-none transition-all duration-300 rounded-full"
        tabIndex={0}
        title="LinkedIn de Miguel Oliveira"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="mailto:mo736356@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        className="text-gray-200 hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 focus:outline-none transition-all duration-300 rounded-full"
        tabIndex={0}
        title="Enviar email para Miguel Oliveira"
      >
        <MdEmail size={32} />
      </a>
      <a
        href="https://github.com/miguel-oliveirRa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-200 hover:text-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-400 focus:outline-none transition-all duration-300 rounded-full"
        tabIndex={0}
        title="GitHub de Miguel Oliveira"
      >
        <FaGithub size={32} />
      </a>
    </div>
  </motion.section>
);

export default AboutMe;
