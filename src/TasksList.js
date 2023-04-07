import React from 'react';
import { useSelector } from 'react-redux';

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  const total = useSelector((state) => state.total);

  const groupedTasks = tasks.reduce((acc, task) => {
    const existingTask = acc.find((t) => t.name === task.name);
    if (existingTask) {
      existingTask.time += task.time;
      existingTask.id = Math.min(existingTask.id, task.id);
    } else {
      acc.push({ ...task });
    }
    return acc;
  }, []);

  const sortedTasks = groupedTasks.sort((a, b) => b.id - a.id);

  return (
    <div>
      <ul id="tasks">
        {sortedTasks.map((task) => (
          <li key={task.id} className="task">
            <span className="id">{task.id}</span>
            <span className="name">{task.name}</span>
            <span className="time">{task.time}</span>
          </li>
        ))}
      </ul>
      <span id="total">{total}</span>
    </div>
  );
};

export default TasksList;
