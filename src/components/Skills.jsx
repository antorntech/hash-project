import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <div id="skills">
      <div className="py-12">
        <header className="flex flex-col justify-center items-center gap-3">
          <p className="text-lg uppercase text-primary font-bold tracking-tight">
            skills
          </p>
          <h1 className="text-5xl font-bold">My Skills</h1>
          <p className="text-gray text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            incidunt.
          </p>
        </header>
        <div className="grid grid-cols-3 gap-12 mt-12">
          <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
            <h1 className="font-bold text-xl">HTML</h1>
            <CircularProgressbar
              value={90}
              text={`90%`}
              className="size-36"
              styles={{
                path: {
                  stroke: "#B1B493",
                },
                text: {
                  fill: "#000",
                },
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
            <h1 className="font-bold text-xl">CSS</h1>
            <CircularProgressbar
              value={80}
              text={`80%`}
              className="size-36"
              styles={{
                path: {
                  stroke: "#B1B493",
                },
                text: {
                  fill: "#000",
                },
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
            <h1 className="font-bold text-xl">React</h1>
            <CircularProgressbar
              value={70}
              text={`70%`}
              className="size-36"
              styles={{
                path: {
                  stroke: "#B1B493",
                },
                text: {
                  fill: "#000",
                },
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
            <h1 className="font-bold text-xl">Node JS</h1>
            <CircularProgressbar
              value={70}
              text={`70%`}
              className="size-36"
              styles={{
                path: {
                  stroke: "#B1B493",
                },
                text: {
                  fill: "#000",
                },
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
            <h1 className="font-bold text-xl">Express</h1>
            <CircularProgressbar
              value={70}
              text={`70%`}
              className="size-36"
              styles={{
                path: {
                  stroke: "#B1B493",
                },
                text: {
                  fill: "#000",
                },
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5 rounded-md custom-shadow py-5">
            <h1 className="font-bold text-xl">MongoDB</h1>
            <CircularProgressbar
              value={70}
              text={`70%`}
              className="size-36"
              styles={{
                path: {
                  stroke: "#B1B493",
                },
                text: {
                  fill: "#000",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
