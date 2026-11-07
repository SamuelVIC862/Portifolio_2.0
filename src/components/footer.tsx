import Button from "../ui/button";

function Footer() {
  const navigation = (
    <>
      <Button variant="footer" sectionName="Home">
        Início
      </Button>
      <Button variant="footer" sectionName="About">
        Experiência
      </Button>
      <Button variant="footer" sectionName="Skills">
        Habilidades
      </Button>
      <Button variant="footer" sectionName="Projects">
        Projetos
      </Button>
    </>
  );
  return (
    <footer
      id="Contact"
      className="min-h-20 w-full bg-footer scroll-mt-16 flex flex-col md:flex-row justify-center md:justify-between items-center p-5 gap-2"
    >
      <p className="text-xs text-[#A3A3A3]">
        © 2026 Samuel Victor Toscano Araujo - Todos os direitos reservados.
      </p>
      <div className="flex items-center gap-2">
        <div className="items-center gap-3 flex flex-col md:flex-row">
          {navigation}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
