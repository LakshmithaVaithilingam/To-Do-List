import React, {useState} from 'react';
import TaskItem from '../TaskItem/TaskItem'
import '../index.css'

function TaskList({ tasks, toggleComplete, deleteTask }) {
    const [filter, setFilter] = useState('all'); // State for the filter
  
    const handleFilterChange = (event) => {
      setFilter(event.target.value);
    };

    // Filter the tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return task.completed;
    } else {
      return !task.completed; // 'uncompleted' filter
    }
  });

  return(
    <div>
        <div>
            <label>
                <input
                    type="radio"
                    value="all"
                    checked={filter === 'all'}
                    onChange={handleFilterChange}
                />
                All
            </label>
            <label>
                <input
                    type="radio"
                    value="completed"
                    checked={filter === 'completed'}
                    onChange={handleFilterChange}
                />
                completed
            </label>
            <label>
                <input
                    type="radio"
                    value="all"
                    checked={filter === 'uncompleted'}
                    onChange={handleFilterChange}
                />
                uncompleted
            </label>
        </div>



        <ul>
        {filteredTasks.map((task) => (
        <TaskItem
        key={task.id}
        task={task}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        />
    ))}
        </ul>
    </div>
  );

}
export default TaskList;