import AboutMe from "./sections/AboutMe";
import Stacks from "./sections/Stacks";
import Projects from "./sections/Projects";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200">
      <header className="py-8 mb-8 shadow bg-gray-950">
        <h1 className="text-4xl font-extrabold text-indigo-500 text-center">
          Meu Portfólio
        </h1>
      </header>
      <AboutMe />
      <Stacks />
      <Projects />
    </main>
  );
};

export default App;
