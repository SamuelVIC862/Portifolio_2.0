import React from "react";
import Button from "../ui/button";

function Header() {
  return (
    <header className="fixed top-0 z-50 h-14 w-full bg-[#141414]">
      <nav className="flex h-full items-center justify-center gap-6">
        <div className="flex text-white justify-between w-full px-4">
          <div className="flex gap-2 justify-center items-center">
            <div className="bg-[#2E2E2E] p-1 rounded-full size-8 text-center">
              S
            </div>
            <p>Samuel Victor</p>
          </div>
          <div className="flex gap-4">
            <Button className="" sectionName="Home">
              Início
            </Button>

            <Button className="" sectionName="About">
              Sobre
            </Button>

            <Button className="" sectionName="Projects">
              Projetos
            </Button>

            <Button className="" sectionName="Contact">
              Contate-me
            </Button>

            <Button className="" sectionName="Contact">
              I
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
