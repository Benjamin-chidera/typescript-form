import React, { ReactNode } from "react";

type Image = {
  img: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export const Header = ({ img, children }: Image) => {
  return (
    <header>
      <img src={img.src} alt={img.alt} />
      {children}
    </header>
  );
};
