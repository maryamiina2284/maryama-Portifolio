import { RevealOnScroll } from "../RevealOnScroll";
import "animate.css";

export const About = () => {
  const frontendSkills = ["React", "Flutter", "JavaScript", "HTML5", "CSS3", "Bootstrap", "TailwindCSS"];
  const backendSkills = ["Node.js", "Python", "Flask", "C#", "Java", "PHP", "MySQL", "PostgreSQL", "Firebase"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image Left Side */}
          <div className="flex justify-center animate__animated animate__fadeInLeft">
            <div className="relative w-80 h-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-100 bg-white hover:shadow-cyan-200 transition-all duration-500">
              <img
                src="public/reza.jpg"
                alt="Maryama Ahmed"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-cyan-300/10 rounded-3xl"></div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="animate__animated animate__fadeInRight">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center md:text-left">
              About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-6">
                I'm Eng. Maryama Ahmed Mohamoud, a passionate and detail-oriented software developer 
                with a strong foundation in web and software development. I ungraduated from 
                Jamhuriya University and my mission is to create innovative solutions that simplify 
                life and enhance user experiences.
                💻 Fullstack Developer | Frontend & Backend Projects | CS & IT Student 🚀 Skilled in HTML, CSS, JavaScript, React, PHP, MySQL, Flask, Python, Node.js, MongoDB.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
  {/* Education Card */}
  <div className="p-6 rounded-2xl border border-white/10 backdrop-blur bg-white/5 shadow-lg transition-all hover:-translate-y-1 hover:shadow-cyan-500/30 animate__animated animate__fadeInUp">
    <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
      🎓 <span>Education</span>
    </h3>
    <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
      <li>
        <strong>Jamhuriya University</strong> – Ungraduated
      </li>
      <li>
        <strong>Horn Afric Primary Secondary School</strong>
      </li>
    </ul>
  </div>

  {/* Contact Card */}
  <div className="p-6 rounded-2xl border border-white/10 backdrop-blur bg-white/5 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-400/30 animate__animated animate__fadeInUp animate__delay-1s">
    <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
      📞 <span>Contact</span>
    </h3>
    <div className="space-y-2 text-gray-300 text-sm md:text-base">
      <p><strong>Email:</strong> maryamiinaruun6@gmail.com</p>
      <p><strong>Phone:</strong> +252 616464022</p>
      <p><strong>GitHub:</strong> <a href="https://github.com/maryamiina2284" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/maryamiina2284</a></p>
    </div>
  </div>
</div>


        
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
