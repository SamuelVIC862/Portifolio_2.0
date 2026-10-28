import type { IconType } from "react-icons";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJava,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiVite,
  SiGitlab,
  SiSpring,
} from "react-icons/si";

import { DiScrum } from "react-icons/di";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";

import { ChevronDown } from "lucide-react";

import "swiper/css";

const technologies = [
  { name: "HTML5", category: "Front-end", icon: FaHtml5 },
  { name: "CSS3", category: "Front-end", icon: FaCss3Alt },
  { name: "JavaScript", category: "Front-end", icon: FaJs },
  { name: "TypeScript", category: "Front-end", icon: SiTypescript },
  { name: "React.js", category: "Front-end", icon: FaReact },
  { name: "Next.js", category: "Front-end", icon: SiNextdotjs },
  { name: "Vue.js", category: "Front-end", icon: FaVuejs },
  { name: "Tailwind CSS", category: "Front-end", icon: SiTailwindcss },
  { name: "Sass", category: "Front-end", icon: FaSass },
  { name: "Bootstrap", category: "Front-end", icon: FaBootstrap },

  { name: "Node.js", category: "Back-end", icon: FaNodeJs },
  { name: "Express.js", category: "Back-end", icon: SiExpress },
  { name: "NestJS", category: "Back-end", icon: SiNestjs },
  { name: "Laravel", category: "Back-end", icon: SiLaravel },
  { name: "Java", category: "Back-end", icon: FaJava },
  { name: "Spring Boot", category: "Back-end", icon: SiSpring },

  { name: "Git", category: "Ferramentas", icon: FaGitAlt },
  { name: "GitHub", category: "Ferramentas", icon: FaGithub },
  { name: "GitLab", category: "Ferramentas", icon: SiGitlab },
  { name: "Docker", category: "Ferramentas", icon: FaDocker },
  { name: "Vite", category: "Ferramentas", icon: SiVite },
  { name: "Scrum", category: "Ferramentas", icon: DiScrum },
];

interface SkillsSwiperProps {
  name: string;
  category: string;
  Icon: IconType;
}

const SkillsSwiper = ({ name, category, Icon }: SkillsSwiperProps) => {
  return (
    <div className="relative h-120 border-4 border-borderStyles pb-10 py-5">
      <div className="flex items-center mb-5 gap-4 px-5">
        <div className="relative">
          <Icon
            className="size-7 text-primary z-10 relative"
            aria-hidden="true"
          />
          <div className="absolute size-6 bg-orange-500 -top-2 -right-2 z-0"></div>
        </div>
        <h1 className="w-fit font-extrabold p-1 text-2xl text-primary">
          {name}
        </h1>
      </div>
      <Swiper
        direction="vertical"
        modules={[FreeMode, Mousewheel]}
        freeMode={{
          enabled: true,
          sticky: false,
          momentum: true,
          momentumRatio: 0.8,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.5,
          releaseOnEdges: true,
        }}
        slidesPerView="auto"
        spaceBetween={20}
        className="h-96 pb-1!"
      >
        {technologies
          .filter((tech) => tech.category === category)
          .map((tech) => (
            <SwiperSlide key={tech.name} className="h-auto! px-5">
              <article className="group relative">
                <div className="absolute inset-0 border-4 border-orange-500 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

                <div className="flex items-center gap-4 relative border-4 border-borderStyles p-4 bg-background">
                  {tech.icon && (
                    <tech.icon className="size-6 shrink-0" aria-hidden="true" />
                  )}
                  <div className="h-10 flex items-center">
                    <p className="font-semibold">{tech.name}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-12 items-end justify-center bg-linear-to-t from-surface to-transparent pb-2">
        <ChevronDown className="size-5 animate-bounce text-secondary" />
      </div>
    </div>
  );
};

export default SkillsSwiper;
