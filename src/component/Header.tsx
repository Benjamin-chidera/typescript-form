import React, {ReactNode} from "react";

type pic = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode
};

export const Header = ({ image, children }: pic) => {
  return (
    <div>
      <img src={image.src} alt={image.alt} />
      {children}
    </div>
  );
};
