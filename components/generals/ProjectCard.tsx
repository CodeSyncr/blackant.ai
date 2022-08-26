import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface ProjectCardProps {
  data: {
    title: string;
    body: string;
    img: string;
  };
}

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <div className="w-[20.8rem] md:w-[30.8rem] lg:w-[40.8rem] h-[30.6rem] bg-baWhite overflow-hidden relative rounded-sm">
      <div className="absolute inset-0 flex justify-center items-center pb-1 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/${data.img}.png`}
          alt={data.title}
          className="w-full md:w-auto md:h-full"
        />
      </div>
      <div className="absolute h-[8rem] w-full bg-baWhite bottom-0 flex items-center md:items-start justify-center flex-col px-16 text-center md:text-left">
        <Heading
          data={data.title}
          className="font-fracMedium text-[1.4rem] md:text-[2rem]"
        />
        <Paragraph
          data={data.body}
          className="font-manrMedium text-[0.8rem] md:text-[1rem]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
