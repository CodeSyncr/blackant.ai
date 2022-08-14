/* eslint-disable @next/next/no-img-element */
import React from "react";

interface RotateTextCompSvgProps {
  size?: number;
  black?: boolean;
}

const RotateTextCompSvg = ({ size = 12, black }: RotateTextCompSvgProps) => {
  return (
    <div
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    >
      {black ? (
        <img src="/icons/contact_us_bk.svg" alt="contact us" />
      ) : (
        <img src="/icons/contact_us_wht.svg" alt="contact us" />
      )}
    </div>
  );
};

export default RotateTextCompSvg;
