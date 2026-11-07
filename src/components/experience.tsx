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
        <p className="z-10 mt-12 mb-12 w-fit bg-linear-to-l from-orange-500/15 to-transparent p-1 text-2xl font-extrabold text-primary sm:mt-16 sm:text-3xl md:mb-0 md:ml-20 md:mt-24">
          Experiência
        </p>
      </div>

      <div className="mb-12 flex min-w-0 flex-col gap-8 text-primary sm:mb-30.5 lg:mb-24 md:flex-row lg:items-center lg:gap-24">
        <div className="relative flex shrink-0 items-center justify-center gap-4">
          <div className="relative">
            <div className="absolute -right-20 top-[-20%] h-180 w-60 border-b-8 border-orange-500 bg-background"></div>
            <RandomLines
              size={100}
              className="absolute -right-12 bottom-30  -rotate-10 "
            />
            <SquareStyle className="z-20 top-20 -right-5" />
            <div className="absolute -right-3 bottom-15  size-15 bg-orange-500"></div>
            <div className="z-20 relative border-8 border-white bg-white">
              <div className="relative size-56 bg-transparent sm:size-72 lg:size-80">
                <img
                  src="/MyPicture.jpg"
                  alt="Samuel Victor Toscano Araujo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full min-w-0 flex-1 items-center gap-6">
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
