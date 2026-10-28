import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Calendar from "../icons/calendar";
import SquareStyle from "../ui/square-style";
import RandomLines from "../icons/randonlines";

const experiences = [
  {
    id: "ufrn",
    role: "Bolsista em Desenvolvimento Front End",
    company: "UFRN",
    period: "01/04/2025 – 05/06/2026",
    responsibilities:
      "Atuei no desenvolvimento e manutenção de interfaces web utilizando React.js, TypeScript, Tailwind CSS e bibliotecas do ecossistema front-end. Participei da reconstrução de um sistema legado, contribuindo para a modernização da interface e integração com microsserviços Spring, além de implementar funcionalidades relacionadas a solicitações, assinaturas e pagamentos. Trabalhei em equipe multidisciplinar, seguindo a metodologia Scrum e boas práticas de desenvolvimento de software.",
  },
  {
    id: "rn-coders",
    role: "Estagiário em Desenvolvimento Full Stack",
    company: "RN Coders",
    period: "01/10/2024 – 02/04/2025",
    responsibilities:
      "Atuei no desenvolvimento de interfaces e funcionalidades front-end para aplicações web, elaborando protótipos para apoiar o planejamento e a implementação dos projetos. Também auxiliei no desenvolvimento back-end e na integração entre os diferentes componentes das aplicações.",
  },
];

function Experience() {
  return (
    <>
      <div className="w-full justify-center flex">
        <p className="w-fit mt-30.5 ml-20 bg-linear-to-l from-orange-500/15 to-transparent font-extrabold p-1 text-3xl text-primary">
          Experiência
        </p>
      </div>

      <div className="flex gap-24 text-primary mb-30.5">
        <div className="flex items-center gap-4 relative">
          <div className="absolute w-60 h-180 bg-background top-[-20%] -right-20 border-b-8 border-orange-500"></div>
          <RandomLines
            size={100}
            className="absolute bottom-30 -rotate-10 -right-12"
          />
          <SquareStyle className="z-20 top-20 -right-5" />
          <div className="absolute w-15 h-15 bg-orange-500 bottom-15 -right-3"></div>
          <div className="bg-white border-8 border-white z-10">
            <div className="bg-transparent relative w-96 h-96">
              <img src="/MyPicture.jpg" />
            </div>
          </div>
        </div>
        <div className="flex w-full min-w-0 flex-1 gap-6 items-center">
          <Swiper
            modules={[Pagination]}
            slidesPerView="auto"
            spaceBetween={16}
            grabCursor
            pagination={{ clickable: true }}
            className="experience-swiper w-full min-w-0"
          >
            {experiences.map((currentExperience) => (
              <SwiperSlide key={currentExperience.id} className="min-w-0">
                <article className="h-full px-6">
                  <div className="mb-4 flex flex-col gap-2">
                    <div>
                      <h3 className="text-lg font-semibold relative">
                        <div className="w-5 border absolute top-3 -left-6"></div>
                        {currentExperience.role}
                      </h3>
                      <p className="text-secondary">
                        {currentExperience.company}
                      </p>
                    </div>

                    <p className="text-xs text-secondary items-center flex">
                      <Calendar size={16} className="mr-1 " />
                      {currentExperience.period}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-secondary">
                    {currentExperience.responsibilities}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Experience;
