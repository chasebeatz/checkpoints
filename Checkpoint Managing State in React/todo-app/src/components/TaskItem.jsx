import React from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.name} - {task.description}</span>
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => editTask(task.id, { ...task, name: 'Updated Name', description: 'Updated Description' })}>
        Edit
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
