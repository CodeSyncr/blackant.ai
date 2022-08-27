import React from "react";
import ServiceCardContent from "./ServiceCardContent";

interface ServiceCardProps {
  data: {
    txt1: string;
    txt2: string;
    txt3: string;
    img: string;
  };
}

const ServiceCard = ({ data }: ServiceCardProps) => {
  return (
    <div className="relative w-[50rem] h-[22rem] md:h-[31rem] bg-baWhite md:bg-transparent rounded-xl">
      <div className="relative w-full h-full ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/${data.img}.svg`}
          alt={data.txt2}
          className="absolute top-0 left-0 "
        />
      </div>
      <div className="absolute text-baBlack right-[5%] top-[20%] lg:right-[5%] lg:top-[30%] w-1/2">
        <ServiceCardContent
          title={data.txt1}
          heading={data.txt2}
          description={data.txt3}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
