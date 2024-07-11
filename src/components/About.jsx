import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
        <div className="md:col-span-1">
          <img
            src="/images/about-1.png"
            alt=""
            className="w-full object-contain rounded-md"
          />
          <div className="w-full h-1 bg-primary mt-3"></div>
        </div>
        <div className="md:col-span-2 flex flex-col justify-center">
          <p className="text-xl text-primary uppercase font-semibold">
            my intro
          </p>
          <h1 className="text-shadoblack text-5xl font-bold py-3">About Me</h1>
          <p className="text-xl text-gray leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repudiandae ipsa voluptatem sapiente nostrum, aut rerum nesciunt
            voluptate ratione quidem temporibus veniam, rem blanditiis deserunt
            sint odit eum iste aliquam, eveniet non illo dolorum. Voluptatum
            velit at, nemo tenetur eveniet, neque modi enim repellendus
            obcaecati iste vel voluptates praesentium nostrum?
          </p>
          <ul className="py-3 flex flex-col gap-3">
            <li className="flex items-center gap-5 text-xl font-semibold">
              <p>Name</p>
              <p className="text-primary">: AM ANTOR</p>
            </li>
            <li className="flex items-center gap-5 text-xl font-semibold">
              <p>Email</p>
              <p className="text-primary">: antor@peoplentech.net</p>
            </li>
            <li className="flex items-center gap-5 text-xl font-semibold">
              <p>Phone</p>
              <p className="text-primary">: 01608081907</p>
            </li>
            <li className="flex items-center gap-5 text-xl font-semibold">
              <p>Address</p>
              <p className="text-primary">: Lalmatia, Mohammadpur, Dhaka</p>
            </li>
          </ul>
          <div className="flex items-center gap-12 mt-3">
            <div className="flex items-center gap-2">
              <div className="bg-primary w-1 h-12"></div>
              <div className="bg-primary p-2 rounded-full">
                <img src="/images/music.png" alt="" />
              </div>
              <p className="text-xl font-semibold">Music</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary w-1 h-12"></div>
              <div className="bg-primary p-2 rounded-full">
                <img src="/images/travel.png" alt="" />
              </div>
              <p className="text-xl font-semibold">Travel</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary w-1 h-12"></div>
              <div className="bg-primary p-2 rounded-full">
                <img src="/images/movie.png" alt="" />
              </div>
              <p className="text-xl font-semibold">Movie</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary w-1 h-12"></div>
              <div className="bg-primary p-2 rounded-full">
                <img src="/images/sports.png" alt="" />
              </div>
              <p className="text-xl font-semibold">Sports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
