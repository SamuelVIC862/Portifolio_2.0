import Button from "../ui/button";
import RandomLines from "../icons/randonlines";
import ArrowLine from "../icons/arrowline";
import Instagram from "../icons/instagram";
import GitHub from "../icons/github";
import Linkedin from "../icons/linkedin";
import Arrow from "../icons/arrow";
import SquareStyle from "../ui/square-style";

function Home() {
  return (
    <div className="flex flex-col py-8 text-primary sm:py-10">
      <div className="w-full text-center text-xl font-bold sm:text-2xl">
        <p>Bem-vindo ao meu portfólio</p>
        <p className="text-2xl font-bold sm:text-3xl md:hidden block">
          Samuel Victor Toscano Araujo
        </p>
      </div>
      <div className="my-8 flex min-w-0 flex-col-reverse gap-8 md:my-10 md:flex-row md:items-center lg:gap-10">
        <div className="relative flex min-w-0 w-full flex-col gap-6 px-2 sm:px-6 lg:px-9">
          <div className="flex min-w-0 flex-col gap-4 px-2 sm:px-6 lg:px-11">
            <p className="text-2xl font-bold sm:text-3xl md:block hidden">
              Samuel Victor Toscano Araujo
            </p>
            <div className="relative">
              <RandomLines
                size={100}
                className="absolute hidden md:block -bottom-15 right-10 rotate-25"
              />
              <ArrowLine
                size={90}
                className="absolute hidden md:block -right-25 top-[5%] rotate-90"
              />
              <div className="absolute -left-6 top-3 hidden w-5 border sm:block"></div>
              <span className="font-semibold bg-linear-to-r from-orange-500/30 to-transparent">
                Web Developer
              </span>
              , com experiência no desenvolvimento de aplicações web modernas e
              responsivas. Trabalho principalmente com React, TypeScript,
              JavaScript e Tailwind CSS, além de possuir experiência com APIs,
              backend, bancos de dados e Docker. Busco criar interfaces
              funcionais, intuitivas e bem estruturadas, unindo qualidade de
              código e experiência do usuário.
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center md:justify-start gap-4 sm:px-6 lg:mt-20 lg:px-11">
            <Button sectionName="About" className="size-4" variant="icon2">
              <Arrow size={24} className="animate-fade-up overflow-hidden" />
            </Button>
            <p>Veja mais</p>
          </div>
        </div>
        <div className="relative flex w-full shrink-0 flex-row-reverse items-center justify-center gap-4 p-2 md:w-auto md:p-4 md:flex-row">
          <RandomLines
            size={85}
            className="absolute z-0 md:hidden bottom-5 right-20 -rotate-5"
          />
          <ArrowLine
            size={60}
            className="absolute z-0 md:hidden -bottom-8 right-60 rotate-60"
          />
          <div className="relative size-56 border-4 border-borderStyles bg-background sm:size-72 lg:size-80 z-10">
            <SquareStyle className="z-10 bottom-30 -left-9" />
            <img
              src="/MyPicture.jpg"
              alt="Samuel Victor Toscano Araujo"
              className="absolute -left-3 -top-3 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Button
              variant="icon2"
              link="https://www.instagram.com/_samuellvictoor/"
            >
              <Instagram size={24} />
            </Button>
            <Button variant="icon2" link="https://github.com/SamuelVIC862">
              <GitHub size={24} />
            </Button>
            <Button
              variant="icon2"
              link="https://www.linkedin.com/in/samuel-victor-a33b91200/"
            >
              <Linkedin size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
