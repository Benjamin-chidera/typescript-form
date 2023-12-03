import {FC, ReactNode } from "react";

// type courseGoal = {
//   title: string;
//   description: string;
// };


// export const CourseGoal = ({ title, description }: courseGoal) => {
//   return (
//     <article>
//       <div>
//         <h2>Title: {title}</h2>
//         <p>Description: {description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };
type courseGoal = {
  id: number
  title: string;
  children: ReactNode;
  deleteGoal: (id: number) => void;
};

// export const CourseGoal: FC<courseGoal> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>Title: {title}</h2>
//         <p>Description: {children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

export const CourseGoal = ({ title, children, deleteGoal, id }: courseGoal) => {
  return (
    <article>
      <div>
        <h2>Title: {title}</h2>
        <p>Description: {children}</p>
      </div>
      <button onClick={() => deleteGoal(id)}>Delete</button>
    </article>
  );
};


