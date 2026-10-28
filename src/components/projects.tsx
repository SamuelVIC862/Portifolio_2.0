function Projects() {
  return (
    <div className="flex flex-col text-primary">
      <div className="flex gap-10">
        <div className="flex flex-col w-full p-4 px-9 gap-6 relative">
          <div className="flex flex-col w-full gap-4 px-11">
            <div className="flex w-full justify-center">
              <p className="w-fit mt-30.5 mb-20 bg-linear-to-l from-orange-500/15 to-transparent font-extrabold p-1 text-3xl text-primary">
                Projetos
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
