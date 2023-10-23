import React, { useEffect } from "react";
import Aos from "aos";

export const NotFoundPage = () => {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    <div   data-aos="fade-down"
                  data-aos-delay="100" className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 md:w-80 md:h-80 h-40 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <img
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  src="https://hadhi.tech/documents/hadhiPortfolioAvatar.png"
                  alt="Abdul Hadhi"
                  className="w-full h-full object-cover my-image"
                />
              </div>
              <div className="text-center p-1 py-10">
                <h2 data-aos="fade-up" className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-5xl">
                  404 NOT FOUND
                </h2>
                <p data-aos="fade-up" data-aos-delay="300" className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-lg">
                I'm a passionate web developer with expertise in React.js and Node.js. Over the past two years, I have had the privilege of working on various projects, gaining valuable experience in both frontend and backend development. My strong problem-solving skills and dedication to delivering high-quality code make me a valuable asset to any development team.
                </p>
              </div>

              </>
  );
};
