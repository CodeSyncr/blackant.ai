import React from "react";
import ServiceCard from "./ServiceCard";

interface Section2Content3Props {
  align: string;
  content: {
    txt1: string;
    txt2: string;
    txt3: string;
    img: string;
  };
}

const Section2Content3 = ({ align, content }: Section2Content3Props) => {
  return (
    <div
      className=" relative flex items-center mx-8 md:mx-16 lg:mx-32 bg-baWhite md:bg-transparent my-8 rounded-xl"
      style={{
        justifyContent: align,
      }}
    >
      <ServiceCard data={content} />
    </div>
  );
};

export default Section2Content3;
