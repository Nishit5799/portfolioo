import Link from "next/link";
import React from "react";

const Page14 = () => {
  const projName = [
    {
      name: "Multiplayer Racing Game",

      link: "https://multiplayercarracing-production.up.railway.app/",
    },
    {
      name: "Mobile Deathmatch Game",

      link: "https://multiplayer-shooting-roan.vercel.app/",
    },
    {
      name: "3d Tic Tac Toe",

      link: "https://tictactoegame-jxm3.vercel.app/",
    },
    {
      name: "Gaming Website",

      link: "https://arcane-gaming-site.vercel.app/",
    },
    {
      name: "Toy Store",

      link: "https://toystore-five.vercel.app/",
    },
  ];
  return (
    <>
      <div className="w-full h-fit  sm:h-[100vh] flex items-center flex-col   ">
        <div className="w-full  text-yellow-500 sm:mt-[35vw] text-outline-black mt-[25vw] sm:-mb-[0.5vw] mb-[7vw] text-[10vw] font-jelly sm:text-[5.5vw] text-center">
          My Projects
        </div>

        {projName.map((proj, i) => {
          return (
            <Link
              href={proj.link}
              className="w-full h-fit sm:h-fit  bg-slate-400/35 sm:bg-transparent  z-10"
            >
              <div className="px-3 pt-4 sm:px-3 sm:pt-0 w-[100%] sm:w-[70%] sm:mx-auto">
                <div
                  key={i}
                  className="project relative  text-black sm:bg-white/70 mb-[5vw] sm:-mb-[0.8vw] bg-white/80 sm:mt-[3.4vw] flex items-center sm:w-[70%]  w-full overflow-hidden mx-auto justify-between sm:px-20 px-6 rounded-full group transition-transform duration-500 ease-out sm:hover:scale-110 hover:scale-105"
                >
                  <div className="overlay absolute -left-[150%] top-0 sm:w-[200vw] w-[380vw] hidden sm:block h-full sm:bg-white/80 bg-white/50 transform sm:-rotate-45 -rotate-90 transition-transform duration-500 ease-in-out sm:group-hover:rotate-0 group-hover:rotate-0"></div>
                  <h1 className="sm:text-[1.6vw] text-[4vw] z-10">
                    {proj.name}
                  </h1>

                  <h1 className="sm:text-[1.4vw] text-[3.3vw] text-black z-10">
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
