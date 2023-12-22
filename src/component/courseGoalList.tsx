import React, { ReactNode } from "react";
import { CourseGoal } from "./CourseGoal";
import { CourseGoals } from "../App";
import { InfoBox } from "./InfoBox";

type MyGoals = {
  goals: CourseGoals[];
  handleDeleteGoal: (id: number) => void;
};

export const CourseGoalList = ({ goals, handleDeleteGoal }: MyGoals) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint" >
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate
      </InfoBox>
    );
  }

  return (
    <div>
      {warningBox}
      <ul>
        {goals.map(({ id, title, description }) => {
          return (
            <li key={id}>
              <CourseGoal
                title={title}
                handleDeleteGoal={handleDeleteGoal}
                id={id}
              >
                {description}
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
