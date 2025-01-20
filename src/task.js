// create tasks

const newTask = (taskName, taskDesc, taskPriority) => {
    return {
        taskName, taskDesc, taskPriority
    }
}

// store tasks in array

let taskList = [];

// create task display

taskList.forEach(() => {
    let taskDisplay = document.getElementById("list");

    // create main container

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-container");
    taskDisplay.appendChild(taskDiv);

    // add title

    let taskTitleDiv = document.createElement("div");
    taskTitleDiv.innerText = "";
    taskTitleDiv.classList.add("task-title");
    taskDisplay.appendChild(taskTitleDiv);

    // add desc 

    let taskDescDiv = document.createElement("div");
    taskDescDiv.innerText = "";
    taskDescDiv.classList.add("task-desc");
    taskDisplay.appendChild(taskDescDiv);

    // add priority

    let taskPriorityDiv = document.createElement("div");
    taskPriorityDiv.innerText = "";
    taskPriorityDiv.classList.add("task-priority");
    taskDisplay.appendChild(taskPriorityDiv);

    // add edit btn

    let taskEditBtn = document.createElement("button");
    taskEditBtn.innerText = "";
    taskEditBtn.classList.add("task-edit-btn");
    taskEditBtn.addEventListener("click", () => {

    });
    taskDisplay.appendChild(taskEditBtn);

    // add delete btn

    let taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.innerText = "";
    taskDeleteBtn.classList.add("task-delete-btn");
    taskDeleteBtn.addEventListener("click", () => {

    });
    taskDisplay.appendChild(taskDeleteBtn);

    // add complete btn

    let taskCompleteBtn = document.createElement("button");
    taskCompleteBtn.innerText = "";
    taskCompleteBtn.classList.add("task-complete-btn");
    taskCompleteBtn.addEventListener("click", () => {

    });
    taskDisplay.appendChild(taskCompleteBtn);
});

// edit task

// delete task

// complete task

// export

export {newTask, taskList}