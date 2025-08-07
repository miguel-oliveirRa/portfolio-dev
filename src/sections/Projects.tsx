import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { getPortfolioRepos } from "../service/api/github";
import extraDescriptions from "../data/extraDescriptions";
import projectChallenges from "../data/projectChallenges";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [agroStock, setAgroStock] = useState<Repo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolioRepos()
      .then(({ filteredRepos, agroStock }) => {
        setRepos(filteredRepos);
        setAgroStock(agroStock);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full max-w-4xl xl:max-w-5xl mx-auto mt-8 py-6 px-2 sm:py-10 sm:px-4 text-center bg-gray-950 rounded-2xl shadow-xl"
      aria-labelledby="projetos-title"
    >
      <h2
        id="projetos-title"
        className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-500"
      >
        Meus Projetos
      </h2>

      <p className="mb-6 text-base sm:text-lg text-gray-200">
        Aqui estão alguns dos meus principais projetos desenvolvidos. Destaque
        para o <span className="font-semibold text-indigo-500">AgroStock</span>,
        uma solução onde queria colocar conhecimentos e aprendizados em prática.
      </p>

      {/* 🔵 Container com fundo para os cards */}
      <div className="bg-gray-900 p-2 sm:p-4 rounded-xl shadow-inner">
        {agroStock && (
          <div className="mb-8">
            <ProjectCard
              key={agroStock.id}
              id={agroStock.id}
              name={agroStock.name}
              url={agroStock.html_url}
              extra={extraDescriptions[agroStock.name]}
              challenge={projectChallenges[agroStock.name]}
            />
          </div>
        )}

        {loading ? (
          <p className="text-gray-400">Carregando projetos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {repos
              .filter((repo) =>
                [
                  "Pokedex",
                  "CRUD-ASP.NET",
                  "GitHub-Wiki",
                  "Desafio-SQL",
                  "trilha-net-testes-unitarios-desafio",
                  "trilha-net-azure-desafio",
                ].includes(repo.name)
              )
              .map((repo) => (
                <ProjectCard
                  key={repo.id}
                  id={repo.id}
                  name={repo.name}
                  url={repo.html_url}
                  extra={extraDescriptions[repo.name]}
                  challenge={projectChallenges[repo.name]}
                />
              ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
