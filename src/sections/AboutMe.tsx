import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe: React.FC = () => (
  <section className="w-full max-w-3xl mx-auto mb-10 py-8 px-4 sm:py-12 sm:px-8 text-center bg-gray-950 rounded-2xl shadow-xl">
    <img
      src="../assets/foto-project.jpg"
      alt="Foto de Miguel"
      className="mx-auto mb-6 rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover shadow-lg border-4 border-blue-200 dark:border-blue-700"
    />
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-500">
      Sobre Mim
    </h2>
    <p className="text-base sm:text-lg text-gray-200">
      Olá! Meu nome é Miguel. Sou desenvolvedor apaixonado por tecnologia,
      especializado em criar soluções modernas e eficientes. Aqui você encontra
      meus principais projetos
    </p>
    <div className="mt-8 flex justify-center gap-4 sm:gap-6">
      <a
        href="https://www.linkedin.com/in/miguel-oliveira-castro"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-sky-600 hover:text-sky-400 transition-colors"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="https://github.com/miguel-oliveirRa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-200 hover:text-purple-500 transition-colors"
      >
        <FaGithub size={32} />
      </a>
    </div>
  </section>
);

export default AboutMe;
