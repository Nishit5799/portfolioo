import Link from "next/link";
import React from "react";

const Page14 = () => {
  const projName = [
    {
      name: "Nishkart",
      link: "https://multiplayercarracing-production.up.railway.app/",
      image: "/racing.jpg",
      description: "Real-time multiplayer racing game with physics engine.",
      Technology:
        "Next, Tailwind, React-three-fiber, React-three-rapier, Socket.io, Redis.",
    },
    {
      name: "Mobile Deathmatch",
      link: "https://multiplayer-shooting-roan.vercel.app/",
      image: "/deathmatch.jpg",
      description: "Online multiplayer shooter with mobile controls.",
      Technology:
        "React, Tailwind, PlayroomKit, Three.js, React-three-fiber, React-three-rapier.",
    },
    {
      name: "Tic Tac Toe",
      link: "https://tictactoegame-jxm3.vercel.app/",
      image: "/tictactoe.jpg",
      description: "Classic game reimagined in 3D space with animations.",
      Technology: "Next, Tailwind, Three.js, React-three-drei, GSAP.",
    },
    {
      name: "Gaming Website",
      link: "https://arcane-gaming-site.vercel.app/",
      image: "/arcane_gaming_site.jpg",
      description: "Interactive gaming website with dynamic content.",
      Technology: "React, Tailwind, Framer-motions, GSAP, ScrollTrigger.",
    },
    {
      name: "Toy Store",
      link: "https://toystore-five.vercel.app/",
      image: "/funtoy.jpg",
      description: "E-commerce site with 3D product previews.",
      Technology: "Next, Tailwind, Three.js, GSAP.",
    },
  ];

  return (
    <div className="w-full min-h-screen mt-[-18vh] sm:mt-[48vh] flex flex-col items-center py-12 sm:py-24 px-4 sm:px-8">
      <div className="w-full text-yellow-500 mb-12 sm:mb-6 text-[10vw] sm:text-[5.5vw] font-jelly text-center">
        My Projects
      </div>

      <div className="w-full max-w-6xl sm:-mt-5  -mt-10 ">
        {/* First Row - 2 projects on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {projName.slice(0, 4).map((proj, i) => (
            <Link href={proj.link} key={i} className="group">
              <div className="relative   h-full bg-white/80 hover:bg-white/90 transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl flex flex-col">
                <div className="w-full aspect-video overflow-hidden relative flex items-center justify-center bg-gray-70">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="h-full w-auto max-w-none object-contain transition-transform duration-500 group-hover:scale-105"
                    style={{
                      maxHeight: "80%",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="sm:p-2 p-1 flex flex-col flex-grow sm:-mt-6 -mt-2">
                  <h3 className="text-sm sm:text-2xl font-medium  z-10 text-center">
                    {proj.name}
                  </h3>
                  <p className="text-xs sm:text-base text-black/90 sm:mb-0 mb-1 z-10 text-center">
                    {proj.description}
                  </p>
                  <p className="text-xs sm:text-sm text-black/80 mb-2 z-10 text-center">
                    <span className="font-bold">Tech:</span> {proj.Technology}
                  </p>
                  <div className="mx-auto ">
                    <p className="text-xs sm:text-sm sm:text-center text-black/80 font-medium z-10 inline-flex items-center">
                      Click to open
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 mt-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Second Row - Centered Toy Store */}
        <div className="flex justify-center">
          <Link href={projName[4].link} className="group w-[50%] sm:w-[23%] ">
            <div className="relative h-full bg-white/80 hover:bg-white/90 transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl flex flex-col">
              <div className="w-full aspect-video overflow-hidden relative flex items-center justify-center bg-gray-70">
                <img
                  src={projName[4].image}
                  alt={projName[4].name}
                  className="h-full w-auto max-w-none object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{
                    maxHeight: "80%",
                    maxWidth: "100%",
                  }}
                />
              </div>
              <div className="sm:p-2 p-1 flex flex-col flex-grow sm:-mt-6 -mt-2">
                <h3 className="text-sm sm:text-2xl font-medium z-10 text-center">
                  {projName[4].name}
                </h3>
                <p className="text-xs sm:text-base text-black/90 sm:mb-0 mb-1 z-10 text-center">
                  {projName[4].description}
                </p>
                <p className="text-xs sm:text-sm text-black/80 mb-2 z-10 text-center">
                  <span className="font-medium ">Tech:</span>{" "}
                  {projName[4].Technology}
                </p>
                <div className="mx-auto -mt-2">
                  <p className="text-xs sm:text-sm sm:text-center text-black/80 font-medium z-10 inline-flex items-center">
                    Click to open
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 mt-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page14;
