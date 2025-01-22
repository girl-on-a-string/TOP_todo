// import

import { submitModal} from "./modal";

// create tasks

const newTask = (taskName, taskDesc, taskPriority) => { // task object
    return {
        taskName, taskDesc, taskPriority
    }
}

// store tasks in array

let taskList = [];

// create task display

const createDOMTask = () => {
    let taskDisplay = document.getElementById("list");
    
    // create main container
    
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-container");
    taskDisplay.appendChild(taskDiv);
    
    // add title
    
    let taskTitleDiv = document.createElement("div");
    taskTitleDiv.innerText = newTask().taskName;
    taskTitleDiv.classList.add("task-title");
    taskDiv.appendChild(taskTitleDiv);
    
    // add desc 
    
    let taskDescDiv = document.createElement("div");
    taskDescDiv.innerText = newTask().taskDesc;
    taskDescDiv.classList.add("task-desc");
    taskDiv.appendChild(taskDescDiv);
    
    // add priority
    
    let taskPriorityDiv = document.createElement("div");
    taskPriorityDiv.innerText = newTask().taskPriority;
    taskPriorityDiv.classList.add("task-priority");
    taskDiv.appendChild(taskPriorityDiv);
    
    // add edit btn
    
    let taskEditBtn = document.createElement("button");
    taskEditBtn.innerText = "edit";
    taskEditBtn.classList.add("task-edit-btn");
    taskEditBtn.addEventListener("click", () => {
    
    });
    taskDiv.appendChild(taskEditBtn);
    
    // add delete btn
    
    let taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.innerText = "delete";
    taskDeleteBtn.classList.add("task-delete-btn");
    taskDeleteBtn.addEventListener("click", () => {
    
    });
    taskDiv.appendChild(taskDeleteBtn);
    
    // add complete btn
    
    let taskCompleteBtn = document.createElement("button");
    taskCompleteBtn.innerText = "complete";
    taskCompleteBtn.classList.add("task-complete-btn");
    taskCompleteBtn.addEventListener("click", () => {
    
    });
    taskDiv.appendChild(taskCompleteBtn);
}

// edit task

const editTask = () => {

}

// delete task

const deleteTask = () => {

}

// complete task

const completeTask = () => {

}

// export

export {newTask, taskList, createDOMTask}