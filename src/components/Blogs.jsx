import React from "react";

const Blogs = () => {
  return (
    <div id="blogs">
      <div className="py-12">
        <header className="flex flex-col justify-center items-center gap-3">
          <p className="text-lg uppercase text-primary font-bold tracking-tight">
            blogs
          </p>
          <h1 className="text-5xl font-bold">My Blogs</h1>
          <p className="text-gray text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            incidunt.
          </p>
        </header>
        <div className="grid grid-cols-3 gap-12 mt-12">
          <div className="group cursor-pointer rounded-md">
            <div className="overflow-hidden rounded-t rounded-tl-md rounded-tr-md">
              <img
                src="/images/blog-1.jpg"
                alt=""
                className="group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
              />
            </div>
            <div>
              <p className="text-gray text-md pb-2">Jan 01, 2023</p>
              <h1 className="text-2xl font-bold">Blog Title 01</h1>
              <p className="text-lg text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, quia.
              </p>
              <p className="text-primary font-bold text-lg">Read More</p>
            </div>
          </div>
          <div className="group cursor-pointer rounded-md">
            <div className="overflow-hidden rounded-t rounded-tl-md rounded-tr-md">
              <img
                src="/images/blog-2.jpg"
                alt=""
                className="group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
              />
            </div>
            <div>
              <p className="text-gray text-md pb-2">Jan 01, 2023</p>
              <h1 className="text-2xl font-bold">Blog Title 02</h1>
              <p className="text-lg text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, quia.
              </p>
              <p className="text-primary font-bold text-lg">Read More</p>
            </div>
          </div>
          <div className="group cursor-pointer rounded-md">
            <div className="overflow-hidden rounded-t rounded-tl-md rounded-tr-md">
              <img
                src="/images/blog-3.jpg"
                alt=""
                className="group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
              />
            </div>
            <div>
              <p className="text-gray text-md pb-2">Jan 01, 2023</p>
              <h1 className="text-2xl font-bold">Blog Title 03</h1>
              <p className="text-lg text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, quia.
              </p>
              <p className="text-primary font-bold text-lg">Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
