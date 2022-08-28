import React from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";

interface ServiceCardContentProps {
  title: string;
  heading: string;
  description: string;
}

const ServiceCardContent = ({
  title,
  heading,
  description,
}: ServiceCardContentProps) => {
  return (
    <div className="bg-baWhite md:bg-transparent text-[1rem] ">
      <Paragraph
        data={title}
        className="font-manrExtraBold text-[0.8rem] md:text-[1rem] uppercase text-baOrange mb-4"
      />
      <Heading
        data={heading}
        className="font-fracRegular text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] mb-8"
      />
      <Paragraph
        data={description}
        className="font-manrRegular text-[0.8rem] md:text-[1.1rem] pr-4"
      />
    </div>
  );
};

export default ServiceCardContent;
