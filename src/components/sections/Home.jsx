import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import "animate.css";

export const Home = () => {
  return (
    <section
      id="home"
        className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white"

    >
      <RevealOnScroll>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 z-10 animate__animated animate__fadeInLeft">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Maryama Ahmed 
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              As a passionate full-stack developer, I specialize in building elegant,  
              high-performance web applications. My focus is on creating seamless,  
              user-friendly experiences with clean and scalable code.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:scale-105 transform transition duration-300 animate__animated animate__fadeInUp"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border-2 border-cyan-400 text-cyan-600 py-3 px-6 rounded-lg font-medium hover:bg-cyan-50 hover:scale-105 transform transition duration-300 animate__animated animate__fadeInUp animate__delay-1s"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center animate__animated animate__fadeInRight">
            <div className="relative w-80 h-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-100 bg-white hover:shadow-cyan-200 transition-all duration-500">
              <img
                src="public/reza.jpg"
                alt="Maryama Ahmed"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-cyan-300/10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
