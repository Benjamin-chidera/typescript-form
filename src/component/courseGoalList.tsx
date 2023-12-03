import { CourseGoal } from "./CourseGoal";
import { CourseGoal as CourseGoals } from "../App";

type CourseGoal = {
  goals: CourseGoals[];
  deleteGoal: (id: number) => void;
};

export const CourseGoalList = ({ goals, deleteGoal }: CourseGoal) => {
  return (
    <ul>
      {goals.map((item) => (
        <li key={item.id}>
          <CourseGoal title={item.title} deleteGoal={deleteGoal} id={item.id}>
            <p>{item.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};
