import React, { useEffect, useRef } from "react";

import ProjectCard from "../generals/ProjectCard";
import { Section4Content2Props } from "../sections/Types";

const Section4Content2 = ({
  data,
  items,
  setItems,
  sections,
  setSections,
}: Section4Content2Props) => {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
      } else {
      }
    });
  }, [items, sections]);

  return (
    <div
      ref={ref}
      className="font-fracRegular w-screen overflow-x-scroll pl-[5rem]"
    >
      <div className="flex gap-16 justify-start absolute left-[10px] md:left-[40px] lg:left-[100px] px-[5rem]">
        {data.map((card, i) => (
          <ProjectCard key={i} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Section4Content2;
