import Link from "next/link";
import React from "react";

const Page14 = () => {
  const projName = [
    {
      name: "Multiplayer Racing Game",
      tech: "React, Three fiber, Rapier, Socket.io ",
      link: "https://multiplayercarracing-production.up.railway.app/",
    },
    {
      name: "TIC TAC TOE Game",
      tech: "React, Three fiber",
      link: "https://tictactoegame-jxm3.vercel.app/",
    },
    {
      name: "Free World Movement",
      tech: "React, Three fiber, Rapier",
      link: "https://dust2game-nishit-luguns-projects.vercel.app/",
    },
    {
      name: "Gaming Web",
      tech: "React, GSAP, Tailwind",
      link: "https://arcane-gaming-site-jlrz.vercel.app/",
    },
    {
      name: "Toy Store",
      tech: "Nextjs, GSAP, THREE",
      link: "https://toystore-two.vercel.app/",
    },
    {
      name: "Studio",
      tech: "HTML, CSS, JS",
      link: "https://apex-studio-1s6q.vercel.app/",
    },
  ];
  return (
    <>
      <div className="w-full  sm:h-[100vh] flex items-center flex-col  ">
        <div className="w-full  text-white sm:mt-[35vw] text-outline-black mt-[25vw] sm:-mb-[0.5vw] mb-[7vw] text-[10vw] font-jelly sm:text-[5.5vw] text-center">
          My Projects
        </div>

        {projName.map((proj, i) => {
          return (
            <Link href={proj.link} className="w-full h-full sm:h-fit  z-10">
              <div className="px-3 w-[100%]">
                <div
                  key={i}
                  className="project relative font-choco text-black sm:bg-white/50 mb-[5vw] sm:-mb-[0.8vw] bg-white/80 sm:mt-[3.4vw] flex items-center sm:w-[70%]  w-full overflow-hidden mx-auto justify-between sm:px-20 px-6 rounded-full group transition-transform duration-500 ease-out sm:hover:scale-110 hover:scale-105"
                >
                  <div className="overlay absolute -left-[150%] top-0 sm:w-[200vw] w-[380vw] h-full sm:bg-white/80 bg-white/50 transform sm:-rotate-45 -rotate-90 transition-transform duration-500 ease-in-out sm:group-hover:rotate-0 group-hover:rotate-0"></div>
                  <h1 className="sm:text-[2.1vw] text-[4vw] z-10">
                    {proj.name}
                  </h1>
                  <h1 className="sm:text-[1.7vw] text-[3.5vw] absolute sm:text-center sm:left-[0] left-[37%] w-full z-10">
                    {proj.tech} used
                  </h1>
                  <h1 className="sm:text-[1.8vw] text-[3.5vw] text-black z-10">
                    Click to open
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Page14;
