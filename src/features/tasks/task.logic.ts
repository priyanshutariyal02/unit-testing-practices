// src/features/tasks/task.logic.ts
import { Task } from "./task.types";

export const getCompletedTasksCount = (tasks: Task[]): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }
  return tasks.filter(
    (task) => task && typeof task.completed == "boolean" && task.completed
  ).length;
};
