// create tasks

const newTask = (taskName, taskDesc, taskPriority) => {
    return {
        taskName, taskDesc, taskPriority
    }
}

// store tasks in array

let taskList = [];

// export

export {newTask, taskList}