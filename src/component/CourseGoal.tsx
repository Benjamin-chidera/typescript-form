import React, { ReactNode } from "react";

type Into = {
  title: string;
  // description: string;
  children: ReactNode;
  id: number;
  handleDeleteGoal: (id: number) => void;
};

export const CourseGoal = ({ title, children, handleDeleteGoal, id }: Into) => {
  return (
    <article>
      <div>
        <h2>TITLE: {title}</h2>
        <p>DESCRIPTION: {children}</p>
      </div>
      <button onClick={() => handleDeleteGoal(id)}>❌</button>
    </article>
  );
};
