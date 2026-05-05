// import { fetchTasks } from "@/features/tasks/task.service";

import { fetchTasks } from "@/features/tasks/task.service";

// describe("fetchTasks", () => {
//   beforeEach(() => {
//     jest.resetAllMocks();
//   });

//   it("should return tasks in susscess", async () => {
//     const mockData = [{ id: "1", title: "Test", completed: false }];

//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve(mockData),
//       } as Response)
//     ) as jest.Mock;

//     const result = await fetchTasks();

//     expect(result).toEqual(mockData);
//     expect(fetch).toHaveBeenCalledWith("/api/tasks");
//   });

//   it("should throw error on failure", async () => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         ok: false,
//       } as Response)
//     ) as jest.Mock;

//     await expect(fetchTasks()).rejects.toThrow("Failed to fetch tasks");
//   });
// });

describe("fetchTasks (MSW)", () => {
  it("should return mocked tasks", async () => {
    const result = await fetchTasks();

    expect(result).toEqual([{ id: "1", title: "Mock Task", completed: false }]);
  });
});
