// create tasks

const newTask = (taskName, taskDesc, taskPriority) => { // task object
    return {
        taskName, taskDesc, taskPriority
    }
}

// store tasks in array

let taskList = [];

// create task display

const createDOMTask = (task) => {
    let taskDisplay = document.getElementById("list");
    
    // create main task container
    
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-container");
    taskDisplay.appendChild(taskDiv);

    // create status container and content 

    let statusDiv = document.createElement("div");
    statusDiv.classList.add("task-status");
    taskDiv.appendChild(statusDiv);

    let taskCompleteBtn = document.createElement("button");
    taskCompleteBtn.innerText = "complete";
    taskCompleteBtn.classList.add("task-complete-btn");
    taskCompleteBtn.addEventListener("click", () => {
    
    });
    statusDiv.appendChild(taskCompleteBtn);

    // create main content div 

    let mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("main-task-content");
    taskDiv.appendChild(mainContentDiv);

    // create task # div

    let taskNumDiv = document.createElement("div");
    taskNumDiv.classList.add("task-number");
    taskNumDiv.innerText = "num";
    mainContentDiv.appendChild(taskNumDiv);

    // create task info div

    let taskInfoDiv = document.createElement("div");
    taskInfoDiv.classList.add("task-info");
    mainContentDiv.appendChild(taskInfoDiv);

        // add priority
    
        let taskPriorityDiv = document.createElement("div");
        taskPriorityDiv.innerText = task.taskPriority;
        taskPriorityDiv.classList.add("task-priority");
        taskInfoDiv.appendChild(taskPriorityDiv);

        // create main info div

        let mainInfoDiv = document.createElement("div");
        mainInfoDiv.classList.add("main-info");
        taskInfoDiv.appendChild(mainInfoDiv);

            // create title

            let taskTitleDiv = document.createElement("div");
            taskTitleDiv.innerText = task.taskName;
            taskTitleDiv.classList.add("task-title");
            mainInfoDiv.appendChild(taskTitleDiv);

            // create desc

            let taskDescDiv = document.createElement("div");
            taskDescDiv.innerText = task.taskDesc;
            taskDescDiv.classList.add("task-desc");
            mainInfoDiv.appendChild(taskDescDiv);

        // create due date div

        let taskDueDiv = document.createElement("div");
        taskDueDiv.classList.add("task-due-date");
        taskDueDiv.innerText = "due date";
        taskInfoDiv.appendChild(taskDueDiv);

    // create task settings div

    let taskSettingsDiv = document.createElement("div");
    taskSettingsDiv.classList.add("task-settings");
    taskDiv.appendChild(taskSettingsDiv);
    
        // create edit btn
        
        let taskEditBtn = document.createElement("button");
        taskEditBtn.innerText = "edit";
        taskEditBtn.classList.add("task-edit-btn");
        taskEditBtn.addEventListener("click", () => {
        
        });
        taskSettingsDiv.appendChild(taskEditBtn);
        
        // create delete btn
        
        let taskDeleteBtn = document.createElement("button");
        taskDeleteBtn.innerText = "delete";
        taskDeleteBtn.classList.add("task-delete-btn");
        taskDeleteBtn.addEventListener("click", () => {
        
        });
        taskSettingsDiv.appendChild(taskDeleteBtn);
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