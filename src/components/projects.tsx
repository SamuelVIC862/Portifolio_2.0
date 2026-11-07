import { FaArrowUp } from "react-icons/fa";
import Button from "../ui/button";

const projects = [
  {
    name: "RNCoders",
    description:
      "Desenvolvimento de interfaces web com Next.js, criação de componentes reutilizáveis, implementação de funcionalidades e participação nas decisões técnicas e definição de tarefas.",
    photo: "/RNCoders.png",
    role: "Desenvolvedor Front-end",
    link: "",
  },
  {
    name: "Vernáculo",
    description:
      "Desenvolvimento de aplicações web com Next.js e Laravel, integração entre front-end e back-end por meio de APIs REST e implementação de funcionalidades conforme os requisitos dos projetos.",
    photo: "/Venaculo.png",
    role: "Desenvolvedor Front-end",
    link: "",
  },
  {
    name: "Sebito",
    description:
      "Desenvolvimento de aplicações web com React e Spring em arquitetura de microsserviços, construção de formulários e hooks complexos, integração com APIs REST e colaboração em equipe com mais de 10 integrantes em ambiente Scrum.",
    photo: "Sebito.png",
    role: "Desenvolvedor Web",
    link: "",
  },
];

function Projects() {
  return (
    <div className="flex flex-col text-primary">
      <div className="flex">
        <div className="flex flex-col w-full gap-6 relative">
          <div className="flex flex-col w-full gap-4 px-11">
            <div className="flex w-full justify-center">
              <p className="w-fit mt-30.5 mb-20 bg-linear-to-l from-orange-500/15 to-transparent font-extrabold p-1 text-3xl text-primary">
                Projetos
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="flex h-full flex-col overflow-hidden p-2 hover:bg-background transition-colors duration-500"
                >
                  <img
                    src={project.photo}
                    alt={`Projeto ${project.name}`}
                    className="aspect-video w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-3 pt-3 relative">
                    <Button variant="projects">
                      <FaArrowUp className="rotate-45" />
                    </Button>
                    <p className="relative ml-3 text-xs text-secondary items-center flex">
                      <div className="w-2 border-t border-secondary absolute -left-3"></div>
                      {project.role}
                    </p>
                    <h2 className="text-xl font-bold">{project.name}</h2>
                    <p className="text-sm leading-relaxed text-secondary">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
