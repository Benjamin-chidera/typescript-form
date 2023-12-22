import { Header } from "./component/Header";
import goal from "./assets/goals.jpg";
import { useState } from "react";
import { CourseGoalList } from "./component/CourseGoalList";
import { NewGoal } from "./component/NewGoal";
import { CourseGoal } from "./component/CourseGoal";

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoals = {
      id: Math.random(),
      description: summary,
      title: goal,
    };

    setGoals([...goals, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    const filters = goals.filter((item) => item.id !== id);
    setGoals(filters);
  };

  return (
    <main>
      <Header img={{ src: goal, alt: "Goals Image" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
      
    </main>
  );
}
