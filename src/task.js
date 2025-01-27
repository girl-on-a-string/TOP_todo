// create tasks

const newTask = (taskName, taskDesc, taskPriority) => { // task object
    return {
        taskName, taskDesc, taskPriority
    }
}

// store tasks in array

let taskList = [];

// increase task number with each added

let num = 0;

taskList.forEach(() => {
    num++;
});

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
    taskCompleteBtn.innerText = "c";
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
    taskNumDiv.innerText = num;
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

        switch (task.taskPriority) {
            case "low-priority": // color green
                taskPriorityDiv.style.color = window.getComputedStyle(document.body).getPropertyValue("--txt-low");
                break;
            case "mid-priority": // color gold
                taskPriorityDiv.style.color = window.getComputedStyle(document.body).getPropertyValue("--txt-mid");
                break;
            case "high-priority": // color red
                taskPriorityDiv.style.color = window.getComputedStyle(document.body).getPropertyValue("--txt-high");
                break;
            case "no-priority": // color white
                taskPriorityDiv.style.color = window.getComputedStyle(document.body).getPropertyValue("--txt-no");
                break;
            default: // no color/default
                taskPriorityDiv.style.color = window.getComputedStyle(document.body).getPropertyValue("--txt-contrast");
                break;
        }

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
        taskEditBtn.innerText = "e";
        taskEditBtn.classList.add("task-edit-btn");
        taskEditBtn.addEventListener("click", () => {
        
        });
        taskSettingsDiv.appendChild(taskEditBtn);
        
        // create delete btn
        
        let taskDeleteBtn = document.createElement("button");
        taskDeleteBtn.innerText = "d";
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