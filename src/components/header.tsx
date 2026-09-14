import Moon from "../icons/moon";
import Sun from "../icons/sun";
import Button from "../ui/button";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="fixed px-52 py-10 top-0 z-50 h-14 w-full">
      <nav className="flex h-full items-center justify-center gap-6">
        <div className="flex justify-between w-full px-4">
          <div className="flex gap-2 justify-center items-center text-primary">
            <div
              className="bg-surface p-1 rounded-full size-8 text-center
            "
            >
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

            <Button
              className=""
              variant="icon"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? <Sun size={50} /> : <Moon size={50} />}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
