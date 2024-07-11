import React from "react";

const Services = () => {
  return (
    <div id="services">
      <div className="py-12">
        <header className="flex flex-col justify-center items-center gap-3">
          <p className="text-lg uppercase text-primary font-bold tracking-tight">
            services
          </p>
          <h1 className="text-5xl font-bold">My Services</h1>
          <p className="text-gray text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            incidunt.
          </p>
        </header>
        <div className="grid grid-cols-3 gap-x-12 gap-y-24 mt-24">
          <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
            <h1 className="text-3xl font-bold py-3 mt-5">Web Design</h1>
            <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              debitis facere quis, alias aut illo accusamus quia dolor iure
              numquam.
            </p>
            <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
              <img src="/images/3d.png" alt="" />
            </div>
          </div>
          <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
            <h1 className="text-3xl font-bold py-3 mt-5">Web Application</h1>
            <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              debitis facere quis, alias aut illo accusamus quia dolor iure
              numquam.
            </p>
            <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
              <img src="/images/appdevelopment.png" alt="" />
            </div>
          </div>
          <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
            <h1 className="text-3xl font-bold py-3 mt-5">Web Development</h1>
            <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              debitis facere quis, alias aut illo accusamus quia dolor iure
              numquam.
            </p>
            <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
              <img src="/images/web.png" alt="" />
            </div>
          </div>
          <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
            <h1 className="text-3xl font-bold py-3 mt-5">Responsive Design</h1>
            <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              debitis facere quis, alias aut illo accusamus quia dolor iure
              numquam.
            </p>
            <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
              <img src="/images/responsive.png" alt="" />
            </div>
          </div>
          <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
            <h1 className="text-3xl font-bold py-3 mt-5">ERP System</h1>
            <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              debitis facere quis, alias aut illo accusamus quia dolor iure
              numquam.
            </p>
            <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
              <img src="/images/erp.png" alt="" />
            </div>
          </div>
          <div className="group relative custom-shadow p-5 rounded-md hover:bg-primary transition-all duration-500">
            <h1 className="text-3xl font-bold py-3 mt-5">CRM System</h1>
            <p className="text-gray text-lg leading-snug group-hover:text-white transition-all duration-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              debitis facere quis, alias aut illo accusamus quia dolor iure
              numquam.
            </p>
            <div className="absolute -top-10 left-10 custom-shadow group-hover:left-16 w-20 h-20 bg-primary group-hover:bg-white p-5 rounded-full flex justify-center items-center transition-all duration-500">
              <img src="/images/crm.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
