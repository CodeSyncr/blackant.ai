export interface SectionProps {
    id?:string;
    setBlack?: React.Dispatch<React.SetStateAction<boolean>>;
    onTopY: boolean;
    setOnTopY: React.Dispatch<React.SetStateAction<boolean>>;
  }