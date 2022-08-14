import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export const Grid = ({ children, className }: GridProps) => {
  return <div className={className}>{children}</div>;
};

interface CellProps {
  children: React.ReactNode;
  className?: string;
}

export const Cell = ({ children, className }: CellProps) => {
  return <div className={className}>{children}</div>;
};
