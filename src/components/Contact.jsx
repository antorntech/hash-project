import React from "react";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="py-12">
        <header className="flex flex-col justify-center items-center gap-3">
          <p className="text-lg uppercase text-primary font-bold tracking-tight">
            contact
          </p>
          <h1 className="text-5xl font-bold">Have a Project?</h1>
          <p className="text-gray text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            incidunt.
          </p>
        </header>
        <div className="grid grid-cols-3 gap-12 mt-12">
          <div className="col-span-2">
            <form action="#">
              <div className="w-full flex items-center gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border-2 border-primary p-3 rounded-md focus:outline-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border-2 border-primary p-3 rounded-md focus:outline-primary"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full border-2 border-primary p-3 rounded-md focus:outline-primary"
                />
              </div>
              <div className="mt-5">
                <textarea
                  name="message"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                  className="w-full border-2 border-primary p-3 rounded-md focus:outline-primary"
                ></textarea>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="px-12 py-3 bg-primary text-white rounded-md font-bold hover:bg-shadoblack transition-all duration-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <FaMapMarkerAlt className="text-3xl text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Location</h1>
                  <p className="text-gray text-lg">
                    151/7, 151/7, Good Luck Center (7th & 8th) Floor, Green
                    Road, Dhaka - 1205, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <FaPhone className="text-3xl text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Phone</h1>
                  <p className="text-gray text-lg">+880179-944-6655</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <FaEnvelope className="text-3xl text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Email</h1>
                  <p className="text-gray text-lg">portfolio@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <FaGlobe className="text-3xl text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Website</h1>
                  <p className="text-gray text-lg">www.portfolio.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
