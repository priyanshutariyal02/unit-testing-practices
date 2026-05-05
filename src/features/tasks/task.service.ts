import { Task } from "./task.types";

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch("/api/tasks");

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
};