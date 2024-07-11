import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="py-12">
        <header className="flex flex-col justify-center items-center gap-3">
          <p className="text-lg uppercase text-primary font-bold tracking-tight">
            projects
          </p>
          <h1 className="text-5xl font-bold">My Projects</h1>
          <p className="text-gray text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            incidunt.
          </p>
        </header>
        <div className="grid grid-cols-3 gap-12 mt-12">
          <div className="group bg-[url('/images/work-1.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
              <h1 className="text-2xl text-white font-bold">
                Frontend Development with React
              </h1>
              <p className="text-primary text-lg uppercase font-bold mt-2">
                web design
              </p>
            </div>
          </div>
          <div className="group bg-[url('/images/work-2.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
              <h1 className="text-2xl text-white font-bold">
                Frontend Development with React
              </h1>
              <p className="text-primary text-lg uppercase font-bold mt-2">
                web design
              </p>
            </div>
          </div>
          <div className="group bg-[url('/images/work-3.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
              <h1 className="text-2xl text-white font-bold">
                Frontend Development with React
              </h1>
              <p className="text-primary text-lg uppercase font-bold mt-2">
                web design
              </p>
            </div>
          </div>
          <div className="group bg-[url('/images/work-4.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
              <h1 className="text-2xl text-white font-bold">
                Frontend Development with React
              </h1>
              <p className="text-primary text-lg uppercase font-bold mt-2">
                web design
              </p>
            </div>
          </div>
          <div className="group bg-[url('/images/work-5.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
              <h1 className="text-2xl text-white font-bold">
                Frontend Development with React
              </h1>
              <p className="text-primary text-lg uppercase font-bold mt-2">
                web design
              </p>
            </div>
          </div>
          <div className="group bg-[url('/images/work-6.jpg')] bg-cover bg-center bg-no-repeat rounded-md">
            <div className="bg-black/50 w-full h-full px-12 py-24 text-center opacity-0 rounded-md group-hover:opacity-100 transition-all duration-500">
              <h1 className="text-2xl text-white font-bold">
                Frontend Development with React
              </h1>
              <p className="text-primary text-lg uppercase font-bold mt-2">
                web design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
