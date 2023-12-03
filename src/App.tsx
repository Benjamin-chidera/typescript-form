import { Header } from "./component/Header";
import goal from "./assets/goals.jpg";
import { useState } from "react";
import { CourseGoalList } from "./component/courseGoalList";
import { NewGoal } from "./component/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prev, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goal, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} deleteGoal={handleDeleteGoal} />
    </main>
  );
}
