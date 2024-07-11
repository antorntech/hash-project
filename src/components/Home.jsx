import React from "react";

const Home = () => {
  return (
    <div id="home">
      <div className="mt-12 flex flex-col md:flex-row md:justify-between md:items-center py-12">
        <div>
          <p className="uppercase text-xl font-bold text-primary">
            hello! this is antor
          </p>
          <h1 className="text-7xl font-bold leading-tight">
            Creative <span className="text-primary">Web</span> <br /> Designer &
            Developer
          </h1>
          <div className="flex items-center gap-5 mt-8">
            <button className="font-bold bg-primary border-2 border-primary hover:bg-white text-white hover:text-black px-4 py-2 rounded-md transition-all duration-500">
              Hire Me
            </button>
            <button className="font-bold border-2 border-primary rounded-md px-4 py-2 hover:bg-primary hover:text-white transition-all duration-500">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img src="/images/bg_1.png" alt="banner image" />
        </div>
      </div>
      <div className="flex justify-between gap-5 py-12">
        <div className="flex items-center gap-3 mx-auto">
          <div>
            <div className="w-24 h-24 rounded-full bg-primary flex justify-center items-center">
              <img src="/images/suitcase.png" alt="" className="" />
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold text-shadoblack">750</p>
            <p className="text-xl font-bold uppercase text-primary">
              project complete
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-auto">
          <div>
            <div className="w-24 h-24 rounded-full bg-primary flex justify-center items-center">
              <img src="/images/clients.png" alt="" />
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold text-shadoblack">750</p>
            <p className="text-xl font-bold uppercase text-primary">
              happy clients
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-auto">
          <div>
            <div className="w-24 h-24 rounded-full bg-primary flex justify-center items-center">
              <img src="/images/calendar.png" alt="" />
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold text-shadoblack">750</p>
            <p className="text-xl font-bold uppercase text-primary">
              years experienced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
