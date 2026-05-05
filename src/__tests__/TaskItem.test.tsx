import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskItem } from '../features/tasks/components/TaskItem';

describe('TaskItem Component', () => {
  const mockTask = {
    id: '1',
    title: 'Buy groceries',
    completed: false,
  };

  it('renders the task title correctly', () => {
    render(<TaskItem task={mockTask} onToggle={jest.fn()} onDelete={jest.fn()} />);
    
    // We use getByText to find elements from the user's perspective
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
  });

  it('calls onToggle when the checkbox is clicked', () => {
    // We create a "mock" function to spy on whether it gets called
    const handleToggle = jest.fn();
    
    render(<TaskItem task={mockTask} onToggle={handleToggle} onDelete={jest.fn()} />);
    
    // Find the checkbox using its accessible role and label
    const checkbox = screen.getByRole('checkbox', { name: /toggle task: buy groceries/i });
    
    // Simulate a user clicking the checkbox
    fireEvent.click(checkbox);
    
    // Verify the function was called with the right ID
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith('1');
  });

  it('calls onDelete when the delete button is clicked', () => {
    const handleDelete = jest.fn();
    
    render(<TaskItem task={mockTask} onToggle={jest.fn()} onDelete={handleDelete} />);
    
    // Find the button using its accessible role
    const deleteButton = screen.getByRole('button', { name: /delete task: buy groceries/i });
    
    // Simulate user click
    fireEvent.click(deleteButton);
    
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith('1');
  });
  
  it('appears checked when the task is completed', () => {
    const completedTask = { ...mockTask, completed: true };
    render(<TaskItem task={completedTask} onToggle={jest.fn()} onDelete={jest.fn()} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
