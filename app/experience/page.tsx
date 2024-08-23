"use client";

import { useState } from "react";

const experiences = [
  {
    id: 0,
    title: "Full stack developer",
    company: "as a Freelancer",
    dateInit: "2020-01",
    dateEnd: "present",
    resume:
      "In my freelance role, I have leveraged various technologies to deliver comprehensive solutions. I established clear communication channels with clients to ensure that their objectives were met precisely. My work included developing interactive dashboards with D3.js, which allowed for sophisticated visual data representation through diverse chart types. I created a detailed interactive map of the United States to present critical data effectively. Additionally, I developed mobile applications using React Native with Expo, integrating these with custom APIs to meet unique project requirements. I ensured that websites were fully responsive, providing an optimal user experience across all devices and screen sizes. My deployment experience includes managing projects on Azure and Digital Ocean, utilizing Docker to streamline containerization and deployment processes.",
  },
  {
    id: 1,
    title: "Full stack developer",
    company: "at Bluepaper",
    dateInit: "2022-06",
    dateEnd: "present",
    resume:
      "At Bluepaper, I spearheaded the development of dynamic web interfaces using Next.js, focusing on reusable components and advanced styling with Tailwind CSS. My projects included the creation of interactive PDFs with ReactPDF, which enhanced document presentation and allowed for customization. I also built an email system using React and react-email, integrating it with interactive PDFs to facilitate efficient communication. One of my notable achievements was designing an interface integrated with Mapbox for a metaverse game, enabling users to purchase virtual spaces via MetaMask. I was also responsible for configuring resources and managing deployments using Docker, overseeing the deployment of front-end, API, and database components. Additionally, I led Adonis.js projects, developing boilerplate code to standardize API development and improve project efficiency.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "at SmartNX",
    dateInit: "2022-12",
    dateEnd: "2024-08",
    resume:
      "During my time at SmartNX, I played a key role in implementing complex features, such as managing stories, content versioning, and news display. I was instrumental in modernizing the system's design to enhance user experience and usability. My collaboration with the agile team was guided by Scrum methodology, ensuring efficient development processes and effective team coordination. I meticulously managed development tasks, including prioritizing features and monitoring progress, which contributed to the successful completion of projects and the optimization of workflows.",
  },
  {
    id: 3,
    title: "Angular Developer",
    company: "at BocaVox",
    dateInit: "2022-03",
    dateEnd: "2022-06",
    resume:
      "At BocaVox, I was responsible for the continuous development and maintenance of the internal system using Angular. My role involved daily communication in English to ensure effective collaboration with the international team. I successfully implemented Scrum methodology to manage projects efficiently and align with objectives. My contributions included developing dynamic components that enhanced the system’s flexibility and adaptability. I was proactive in identifying and resolving bugs, which was crucial for maintaining system stability and providing a consistent user experience. My work ensured that the internal system remained robust and reliable, supporting the company’s operational needs effectively.",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRadioChange = (index: number) => {
    setActiveIndex(index);
  };

  const getStyle = (index: number) => {
    return `z-10 block h-5 w-5 cursor-pointer bg-white rounded-full transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100 ${
      activeIndex === index ? "w-12 opacity-100" : "opacity-50"
    }`;
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 md:gap-20">
      <div className="mx-2 flex h-min flex-col items-center md:mx-8 md:flex-row md:items-end md:gap-4">
        <h2 className="text-lg font-extralight tracking-wider text-auxiliary md:text-4xl">
          Essa é minha
        </h2>
        <span className="text-xl font-normal tracking-widest text-constrast md:text-5xl">
          experiência profissional
        </span>
      </div>
      <div className="flex h-full w-screen flex-col justify-between md:h-[70%] md:gap-8">
        <div className="w-screen overflow-hidden">
          <div
            className={`flex h-full w-full transition-transform duration-500 ease-in-out md:items-center`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {experiences.map(
              ({ id, title, company, dateInit, dateEnd, resume }) => (
                <div
                  key={id}
                  className="flex w-screen flex-shrink-0 flex-col gap-4 px-4 md:gap-8"
                >
                  <div className="flex items-end justify-center gap-2">
                    <h3 className="font-bold md:text-4xl">{title}</h3>
                    <p className="text-sm text-auxiliary md:text-lg">
                      {company}
                    </p>
                  </div>
                  <div className="flex h-full flex-col items-center gap-2 px-4 md:gap-8">
                    <p className="text-xs text-auxiliary md:text-lg">
                      {dateInit} - {dateEnd}
                    </p>
                    <div className="flex h-full flex-col gap-4 text-sm tracking-widest opacity-90 md:w-[75%] md:text-2xl">
                      <p>{resume}</p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="flex w-full justify-center gap-2">
          {experiences.map((_, index) => (
            <label
              key={index}
              className={getStyle(index)}
              onClick={() => handleRadioChange(index)}
            ></label>
          ))}
        </div>
      </div>
    </div>
  );
}
