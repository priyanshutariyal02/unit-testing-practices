import React from 'react';
import { Task } from '../task.types';

type TaskItemProps = {
  task: Task;
  onToggle: (taskId: string) => void;
  onDelete: (taskId: string) => void;
};

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`} data-testid="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        name={`toggle-task-${task.id}`}
        aria-label={`Toggle task: ${task.title}`}
      />
      <span className="task-title">{task.title}</span>
      <button onClick={() => onDelete(task.id)} aria-label={`Delete task: ${task.title}`}>
        Delete
      </button>
    </div>
  );
}
