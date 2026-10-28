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
    <div className="flex flex-col text-primary py-10">
      <div className="text-center w-full text-2xl font-bold">
        <p>Bem-vindo ao meu portfólio</p>
      </div>
      <div className="flex gap-10 my-10">
        <div className="flex flex-col w-full p-4 px-9 gap-6 relative">
          <div className="flex flex-col w-full gap-4 px-11">
            <p className="text-2xl font-bold ">Samuel Victor Toscano Araujo</p>
            <p className="relative">
              <RandomLines
                size={100}
                className="absolute -bottom-15 rotate-25 right-10"
              />
              <ArrowLine
                size={90}
                className="rotate-90 absolute -right-25 top-[5%]"
              />
              <div className="w-5 border absolute top-3 -left-6"></div>
              <span className="font-semibold bg-linear-to-r from-orange-500/30 to-transparent">
                Web Developer
              </span>
              , com experiência no desenvolvimento de aplicações web modernas e
              responsivas. Trabalho principalmente com React, TypeScript,
              JavaScript e Tailwind CSS, além de possuir experiência com APIs,
              backend, bancos de dados e Docker. Busco criar interfaces
              funcionais, intuitivas e bem estruturadas, unindo qualidade de
              código e experiência do usuário.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-20">
            <Button className="size-4" variant="icon2">
              <Arrow size={24} className="animate-fade-up overflow-hidden" />
            </Button>
            <p>Veja mais</p>
          </div>
        </div>
        <div className="w-fit p-4 flex items-center gap-4">
          <div className="border-4 border-borderStyles bg-transparent relative w-96 h-96 ">
            <SquareStyle className="z-10 bottom-30 -left-9" />
            <img
              src="/MyPicture.jpg"
              alt=""
              className="absolute -top-3 -left-3"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="icon2" className="">
              <Instagram size={24} />
            </Button>
            <Button variant="icon2">
              <GitHub size={24} />
            </Button>
            <Button variant="icon2">
              <Linkedin size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
