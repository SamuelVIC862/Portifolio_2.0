import { FaCode, FaServer } from "react-icons/fa";
import SkillsSwiper from "../utils/skills-swiper";

function Skills() {
  return (
    <div className="flex flex-col text-primary py-10">
      <div className="flex min-w-0">
        <div className="relative flex w-full min-w-0 flex-col gap-6">
          <div className="flex w-full min-w-0 flex-col gap-4 px-2 sm:px-6 lg:px-11">
            <div className="flex w-full justify-center">
              <p className="mt-12 mb-8 w-fit bg-linear-to-l from-orange-500/15 to-transparent p-1 text-center text-2xl font-extrabold text-primary sm:mt-16 sm:mb-12 sm:text-3xl lg:mt-24 lg:mb-20">
                Minhas Habilidades
              </p>
            </div>
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SkillsSwiper
                name="Front-end"
                category="Front-end"
                Icon={FaCode}
              />
              <SkillsSwiper
                name="Back-end"
                category="Back-end"
                Icon={FaServer}
              />
              <SkillsSwiper
                name="Ferramentas"
                category="Ferramentas"
                Icon={FaCode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
