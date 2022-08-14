import React from "react";

interface RotateTextCompProps {
  text: string;
  icon?: string;
  spread?: number;
  fontSizeRem?: string;
}

const RotateTextComp = ({
  text,
  icon,
  fontSizeRem = "1.3rem",
  spread = 11,
}: RotateTextCompProps) => {
  return (
    <div className="relative w-[12.5rem] h-[12.5rem] rounded-full uppercase font-manrBold flex justify-center items-center">
      <div className="icon absolute">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="contact us icon" />
      </div>
      <div className="absolute w-full h-full rotate-[60deg]">
        {text.split("").map((ch, i) => {
          return (
            <span
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                transform: `rotate(${i * spread}deg)`,
                transformOrigin: "0 6.25rem",
                fontSize: fontSizeRem,
              }}
            >
              {ch}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RotateTextComp;
