// "use client";

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// export function ThreeDCardDemo() {
//   return (
//     <>
//       <h1 className="page12heading sm:w-[80%] sm:rounded-3xl mx-auto px-2 sm:text-[9.5vw] sm:leading-none  text-[18vw] text-center text-outline-black  sm:px-0 text-white/90 font-jelly ">
//         Welcome!
//       </h1>
//       <h1 className="sm:w-[80%] sm:rounded-3xl text-outline-black mx-auto px-2 sm:text-[4vw] sm:leading-none  text-[7vw] text-center  sm:px-0 text-white/90 font-jelly">
//         Let me introduce myself..
//       </h1>
//       <CardContainer className="inter-var w-full -mt-[8vw] sm:-mt-0">
//         <CardBody className=" relative group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-none  sm:w-[100vw] w-full h-auto rounded-xl p-3 border  ">
//           <CardItem
//             translateZ="100"
//             className="sm:w-[10%] sm:h-fit  w-[40%]  mx-auto mt-4"
//           >
//             <Image
//               src="/img.avif"
//               height="1000"
//               width="1000"
//               className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//               alt="thumbnail"
//             />
//           </CardItem>

//           <div className=" rounded-3xl sm:w-[50%] w-full sm:h-[47vh] h-fit mx-auto">
//             {/* bg-black/40 */}
//             <CardItem
//               as="h1"
//               translateZ="60"
//               className="text-white sm:text-[3vw] text-[9vw] text-center w-[100%] sm:w-[80%]  mt-10  mx-auto  dark:text-neutral-300 font-jelly"
//             >
//               I am Nishit Lugun.
//             </CardItem>
//             <CardItem
//               as="p"
//               translateZ="60"
//               className="text-white sm:text-[1.7vw] text-[5.9vw] text-center sm:w-[70%] w-[95%]   mx-auto  dark:text-neutral-300 font-choco"
//             >
//               A self-taught frontend developer with a passion for coding and
//               problem-solving, who spent two years mastering web development
//               independently. During this time, he relied solely on his curiosity
//               and determination, never using external platforms, and built his
//               skills from the ground up. His journey reflects resilience and a
//               deep understanding of creating intuitive, user-friendly websites
//               from scratch.
//             </CardItem>
//           </div>
//         </CardBody>
//       </CardContainer>
//     </>
//   );
// }
import React from "react";

const Page12_About = () => {
  return (
    <>
      <h1 className="page12heading h-[50vh] sm:h-[100vh] sm:w-[80%] sm:rounded-3xl mx-auto px-2 sm:text-[9.5vw] sm:leading-none  text-[18vw] text-center text-outline-black  sm:px-0 text-white/90 font-jelly ">
        Welcome!{" "}
      </h1>
      <h1 className="sm:w-[80%] sm:rounded-3xl text-outline-black mx-auto px-2 sm:text-[4vw] sm:leading-none  text-[15vw] text-center  sm:px-0 text-white/90 font-jelly">
        Let me introduce myself..
      </h1>
    </>
  );
};

export default Page12_About;
