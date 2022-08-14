import React from "react";
interface ProgramCardProps {
  data: {
    img: string;
    title: string;
    desc: string;
  };
}
const ProgramCard = ({ data }: ProgramCardProps) => {
  return (
    <div className="relative flex text-left gap-4 ">
      <div className="relative w-[70px] h-[70px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/icons/${data.img}.svg`}
          alt={data.title}
          className="h-full max-w-[70px]"
        />
      </div>
      <div className=" flex-1 text-[0.8rem] text-baWhite font-manrLight">
        <h1 className="font-manrBold text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]">
          {data.title}
        </h1>
        <p className="text-baWhite/60">{data.desc}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
