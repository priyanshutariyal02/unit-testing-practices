import { getCompletedTasksCount } from "@/features/tasks/task.logic";
import { Task } from "@/features/tasks/task.types";

describe("getCompletedTasksCount", () => {
  it("should return count of completed tasks", () => {
    const tasks: Task[] = [
      { id: "1", title: "A", completed: true },
      { id: "2", title: "B", completed: false },
      { id: "3", title: "C", completed: true },
    ];

    const result = getCompletedTasksCount(tasks);

    expect(result).toBe(2);
  });

  it("should return 0 if no tasks are completed", () => {
    const tasks: Task[] = [{ id: "1", title: "A", completed: false }];

    const result = getCompletedTasksCount(tasks);

    expect(result).toBe(0);
  });

  it("should handle empty array", () => {
    const result = getCompletedTasksCount([]);

    expect(result).toBe(0);
  });

  it("should ignore invalid task entries", () => {
    const tasks: any = [
      { id: "1", title: "A", completed: true },
      null,
      undefined,
      {},
      { id: "2", title: "B" }, // missing completed
    ];

    const result = getCompletedTasksCount(tasks);

    expect(result).toBe(1);
  });

  it("should it handle null input", () => {
    const result = getCompletedTasksCount(null as any);

    expect(result).toBe(0);
  });

  it("should handle undefined input", () => {
    const result = getCompletedTasksCount(undefined as any);

    expect(result).toBe(0);
  });
});
