import { motion } from "framer-motion";

type Props = {
  id: number;
  name: string;
  url: string;
  extra?: string;
  challenge?: string;
};

const ProjectCard: React.FC<Props> = ({ name, url, extra, challenge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="border rounded-xl p-4 shadow bg-gray-900 flex flex-col justify-between min-h-[180px] sm:min-h-[220px] transition-all duration-300"
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-500">
        {name}
      </h3>
      {extra && (
        <p className="text-xs sm:text-sm text-gray-200 mb-2">{extra}</p>
      )}
      {challenge && (
        <p className="text-xs sm:text-sm text-gray-400 mb-3 mt-3 font-medium">
          <span className="font-semibold">Aprendizado:</span> {challenge}
        </p>
      )}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-2 sm:px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-400 text-gray-950 font-semibold shadow hover:scale-105 hover:from-indigo-600 hover:to-sky-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <span className="inline-flex items-center gap-1 sm:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            Ver repositório
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
