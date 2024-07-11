import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { HashLink as Link } from "react-router-hash-link";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import { GiHamburgerMenu } from "react-icons/gi";

const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="hidden md:block max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center py-5">
            <div>
              <h1 className="text-3xl font-bold text-black">
                ANT<span className="text-primary">O</span>R
              </h1>
            </div>
            <div>
              <ul className="flex items-center gap-5">
                <li>
                  <Link
                    to="#home"
                    smooth
                    className="text-lg uppercase font-semibold"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#about"
                    smooth
                    className="text-lg uppercase font-semibold"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#skills"
                    smooth
                    className="text-lg uppercase font-semibold"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="#services"
                    smooth
                    className="text-lg uppercase font-semibold"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="#projects"
                    smooth
                    className="text-lg uppercase font-semibold"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="#blogs"
                    smooth
                    className="text-lg uppercase font-semibold"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="#contact"
                    smooth
                    className="text-lg uppercase font-semibold"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className=" md:hidden max-w-screen-sm mx-auto flex justify-between items-center py-5">
          <h1 className="text-3xl font-bold text-black">
            ANT<span className="text-primary">O</span>R
          </h1>
          <GiHamburgerMenu className="text-3xl text-primary" />
        </div>
      </header>

      {/* Main */}
      <div className="max-w-screen-sm md:max-w-screen-xl mx-auto">
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Blogs />
        <Contact />
      </div>
      {/* Footer */}
      <footer className="max-w-screen-xl mx-auto h-36 bg-primary flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white py-3">
          ANT<span className="text-black">O</span>R
        </h1>
        <p className="text-white text-lg">
          © Copyright 2024. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default App;
