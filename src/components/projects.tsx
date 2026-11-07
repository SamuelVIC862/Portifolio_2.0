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
    <div className="flex flex-col text-primary py-10">
      <div className="flex">
        <div className="relative flex w-full min-w-0 flex-col gap-6">
          <div className="flex w-full min-w-0 flex-col gap-4 px-2 sm:px-6 lg:px-11">
            <div className="flex w-full justify-center">
              <p className="mt-12 mb-8 w-fit bg-linear-to-l from-orange-500/15 to-transparent p-1 text-2xl font-extrabold text-primary sm:mt-16 sm:mb-12 sm:text-3xl lg:mt-24 lg:mb-20">
                Projetos
              </p>
            </div>
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="flex h-full min-w-0 flex-col overflow-hidden p-2 transition-colors duration-500 hover:bg-background"
                >
                  <img
                    src={project.photo}
                    alt={`Projeto ${project.name}`}
                    className="aspect-video w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-3 pt-3 relative">
                    <Button
                      sectionName="Home"
                      variant="projects"
                      link={project.link}
                    >
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
