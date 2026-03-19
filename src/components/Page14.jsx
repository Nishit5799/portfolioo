import Link from "next/link";
import React from "react";

const PROJECTS = [
  {
    name: "NishGear",
    link: "https://multiplayercarracing-production.up.railway.app/",
    image: "/racing.jpg",
    description: "Real-time multiplayer racing game with physics engine.",
    tech: "Next, Tailwind, R3F, Rapier, Socket.io, Redis.",
  },
  {
    name: "Mobile Deathmatch",
    link: "https://multiplayer-shooting-plum.vercel.app/",
    image: "/deathmatch.jpg",
    description: "Online multiplayer shooter with mobile controls.",
    tech: "React, PlayroomKit, Three.js, R3F, Rapier.",
  },
  {
    name: "Tic Tac Toe",
    link: "https://tictactoegame-jxm3.vercel.app/",
    image: "/tictactoe.jpg",
    description: "Classic game reimagined in 3D space with animations.",
    tech: "Next, Tailwind, Three.js, Drei, GSAP.",
  },
  {
    name: "Gaming Website",
    link: "https://arcane-gaming-site.vercel.app/",
    image: "/arcane_gaming_site.jpg",
    description: "Interactive gaming website with dynamic content.",
    tech: "React, Tailwind, Framer-motion, GSAP.",
  },
  {
    name: "Toy Store",
    link: "https://toystore-five.vercel.app/",
    image: "/funtoy.jpg",
    description: "E-commerce site with 3D product previews.",
    tech: "Next, Tailwind, Three.js, GSAP.",
  },
];

const Page14 = () => {
  return (
    <div className="w-full min-h-screen mt-[-18vh] sm:mt-[48vh] flex flex-col items-center py-12 px-4 sm:px-8">
      <div className="w-full text-yellow-500 mb-12 text-[10vw] sm:text-[5.5vw] font-jelly text-center">
        My Projects
      </div>

      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6 sm:gap-8 -mt-10">
        {PROJECTS.map((proj, i) => (
          <Link
            href={proj.link}
            key={i}
            className="group w-[45%] sm:w-[22%] flex flex-col"
          >
            <div className="relative h-full bg-white/80 hover:bg-white/90 transition-all duration-300 rounded-xl overflow-hidden shadow-lg flex flex-col">
              <div className="w-full aspect-video flex items-center justify-center bg-gray-100/50">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="h-[85%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-2 sm:p-3 flex flex-col flex-grow text-center">
                <h3 className="text-sm sm:text-xl font-bold text-gray-800">
                  {proj.name}
                </h3>
                <p className="text-[10px] sm:text-sm text-gray-600 my-1">
                  {proj.description}
                </p>
                <p className="text-[9px] sm:text-xs text-black/70 mb-3">
                  <span className="font-bold">Tech:</span> {proj.tech}
                </p>
                <div className="mt-auto pt-2 border-t border-gray-200">
                  <span className="text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1">
                    VIEW PROJECT
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page14;
