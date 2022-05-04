// import React from 'react'

import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleDone }) => {
  // console.log("tasks", tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default Tasks;
