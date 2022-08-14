/* eslint-disable react/display-name */
import React from "react";

interface SnapContainerProps {
  children: React.ReactNode;
}

const SnapContainer = React.forwardRef<HTMLDivElement, SnapContainerProps>(
  ({ ...props }, ref) => (
    <div ref={ref} {...props} className="snap-parent-y-mandatory">
      {props.children}
    </div>
  )
);

export default SnapContainer;
