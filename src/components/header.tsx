import { useState } from "react";
import { Menu, X } from "lucide-react";
import Moon from "../icons/moon";
import Sun from "../icons/sun";
import Button from "../ui/button";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = (
    <>
      <Button
        variant="default"
        sectionName="Home"
        onClick={() => setMenuOpen(false)}
      >
        Início
      </Button>
      <Button
        variant="default"
        sectionName="About"
        onClick={() => setMenuOpen(false)}
      >
        Experiência
      </Button>
      <Button
        variant="default"
        sectionName="Skills"
        onClick={() => setMenuOpen(false)}
      >
        Habilidades
      </Button>
      <Button
        variant="default"
        sectionName="Projects"
        onClick={() => setMenuOpen(false)}
      >
        Projetos
      </Button>
    </>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-background/90 backdrop-blur-sm">
      <nav className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-primary">
          <div className="size-8 rounded-full bg-surface p-1 text-center">
            S
          </div>
          <p>Samuel Victor</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-6 lg:flex">{navigation}</div>
          <Button
            variant="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <Button
            variant="icon"
            aria-label={darkMode ? "Ativar tema claro" : "Ativar tema escuro"}
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </Button>
        </div>
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full flex flex-col items-stretch gap-2 border-t border-borderStyles/20 bg-background px-4 py-4 shadow-lg sm:px-6 lg:hidden"
          >
            {navigation}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
