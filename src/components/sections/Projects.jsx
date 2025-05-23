import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaPhp, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss
} from "react-icons/si";
import "animate.css";

const techIcons = {
  React: <FaReact className="text-blue-400 text-xl mr-2 animate-bounce" />,
  "Html5": <SiHtml5 className="text-orange-500 text-xl mr-2 animate-pulse" />,
  "Css3": <SiCss3 className="text-blue-300 text-xl mr-2 animate-pulse" />,
  "JavaScript": <SiJavascript className="text-yellow-300 text-xl mr-2 animate-pulse" />,
  PHP: <FaPhp className="text-purple-400 text-xl mr-2 animate-bounce" />,
  "MySQL": <SiMysql className="text-blue-200 text-xl mr-2 animate-pulse" />,
  "Bootstrap5": <SiBootstrap className="text-purple-500 text-xl mr-2 animate-pulse" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-xl mr-2 animate-pulse" />
};

const allProjects = [
  {
    title: "Gym Management System",
    category: "PHP",
    description: "Complete gym management solution built with PHP and MySQL.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap5"],
    img: "/gym-management-system.png",
    demo: "https://rezagym.infinityfreeapp.com/",
    code: "https://github.com/maryamiina2284/PHP-MYSQL-Project-GYM-Mangement-System"
  },
  {
    title: "Electronic Website",
    category: "React",
    description: "Modern responsive application for searching and Electronic Website with React.",
    tech: ["React", "JavaScript", "Bootstrap5"],
    img: "/electronic-website.png",
    demo: "https://e-comerce-electronic-project.netlify.app/",
    code: "https://github.com/maryamiina2284/E-E-comerce-Electronic-Project/"
  },
  {
    title: "School Website ",
    category: "Html, Css & Js",
    description: "Modern responsive application for searching and School Website with React.",
    tech: ["Html5", "Css3", "JavaScript"],
    img: "/school-website.png",
    demo: "https://school-websitefrontend.netlify.app/",
    code: "https://github.com/maryamiina2284/school-website"
  },
  {
    title: "Employee Management System",
    category: "Java & Spring",
    description: "Complete employee management solution built with Java & Spring.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Html5", "Css3"],
    img: "/employee-management-system.png",
    demo: "https://employee-management-system.infinityfreeapp.com/",
    code: "https://github.com/maryamiina2284/demoEmployee"
  },
  {
    title: "BookStore Management System",
    category: "Java & Spring",
    description: "Complete bookstore management solution built with Java & Spring.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Html5", "Css3"],
    img: "/bookstore-management-system.png",
    demo: "https://bookstore-management-system.infinityfreeapp.com/",
    code: "https://github.com/maryamiina2284/bookstore-management-system"
  },
  {
    title: "Design Login Page",
    category: "Html, Css & Js",
    description: "A simple login page design using HTML, CSS, and JavaScript.",
    tech: ["Html5", "Css3", "JavaScript"],
    img: "/loginPage.jpg",
    demo: "https://designloginpage.netlify.app/",
    code: "https://github.com/maryamiina2284/Login-Page"
  },
  {
    title: "Order Summary",
    category: "Html, Css & Js",
    description: "A simple order summary page design using HTML, CSS, and JavaScript.",
    tech: ["Html5", "Css3"],
    img: "/orderSummary.png",
    demo: "https://ordersummarypro.netlify.app/",
    code: "https://github.com/maryamiina2284/Challenge-20-Days-Css/tree/main/ChallengeDay1"
  },
  {
    title: "Summary Landing Page",
    category: "Html, Css & Js",
    description: "A simple landing page design using HTML, CSS, and JavaScript.",
    tech: ["Html5", "Css3"],
    img: "/summaryLandingPage.png",
    demo: "https://youresult.netlify.app/",
    code: "https://github.com/maryamiina2284/Challenge-20-Days-Css/tree/main/ChallengeDay2"
  },
  {
    title: "AI Chat",
    category: "React",
    description: "AI chatbot interface built with React—featuring a beautiful sidebar, dynamic routing, and smart layout.",
    tech: ["React", "Tailwind CSS", "React Router v6"],
    img: "/aichat.png",
    demo: "https://aichat-design.infinityfreeapp.com/",
    code: "https://github.com/maryamiina2284/AI-chat"
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentItems = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center animate__animated animate__fadeInDown">
            Featured Projects
          </h2>

          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {["All", "Html, Css & Js", "React", "PHP", "Java & Spring", "Node.js", "Flutter", "Python & Flask"].map((cat, i) => (
              <button
                key={i}
                onClick={() => {
                  setFilter(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full transition ${
                  filter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-blue-600/10 text-blue-300 hover:bg-blue-600/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__fadeInUp animate__delay-1s">
            {currentItems.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 shadow-md hover:shadow-cyan-500/20 transition-transform hover:-translate-y-2"
              >
                <div className="rounded-md overflow-hidden mb-4">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center mb-3">
                  {techIcons[project.tech[0]] || <FaReact className="text-xl mr-2" />}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white/10 text-blue-300 hover:bg-blue-500/30"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <style jsx>{`
        .tech-tag {
          @apply bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm inline-flex items-center transition-all duration-200;
        }
        .tech-tag:hover {
          @apply bg-blue-500/20 shadow-[0_2px_8px_rgba(59,130,246,0.2)] -translate-y-0.5;
        }
        .project-link {
          @apply font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-blue-400 bg-gradient-to-r from-blue-600 to-cyan-500 text-white;
        }
        button {
          @apply font-medium px-4 py-2 rounded-full text-sm transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white animate__animated animate__fadeInUp;
        }
      `}</style>
    </section>
  );
};
