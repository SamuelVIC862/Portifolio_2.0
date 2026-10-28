import { FaCode, FaServer } from "react-icons/fa";
import SkillsSwiper from "../utils/skills-swiper";

function Skills() {
  return (
    <div className="flex flex-col text-primary">
      <div className="flex gap-10">
        <div className="flex flex-col w-full p-4 px-9 gap-6 relative">
          <div className="flex flex-col w-full gap-4 px-11">
            <div className="flex w-full justify-center">
              <p className="w-fit mt-30.5 mb-20 bg-linear-to-l from-orange-500/15 to-transparent font-extrabold p-1 text-3xl text-primary">
                Minhas Habilidades
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
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
