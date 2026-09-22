let taskInput =
document.getElementById("taskInput");
 
let taskDate =
document.getElementById("taskDate");
 
let priority =
document.getElementById("priority");
 
let addBtn =
document.getElementById("addBtn");
 
let clearBtn =
document.getElementById("clearBtn");
 
let searchInput =
document.getElementById("searchInput");
 
let filter =
document.getElementById("filter");
 
let taskList =
document.getElementById("taskList");
 
let counter =
document.getElementById("counter");
 
 
let tasks = [];
 
let editIndex = -1;
 
 
addBtn.addEventListener(
"click",
function(){
 
    let task =
    taskInput.value.trim();
 
    if(task === ""){
        alert("Please enter a task!");
        return;
    }
 
    if(editIndex !== -1){
 
        tasks[editIndex].name =
        task;
 
        tasks[editIndex].date =
        taskDate.value;
 
        tasks[editIndex].priority =
        priority.value;
 
        editIndex = -1;
 
        addBtn.textContent =
        "➕ Add Task";
 
    }else{
 
        tasks.push({
 
            name:task,
 
            date:taskDate.value,
 
            priority:priority.value,
 
            completed:false
 
        });
    }
 
    taskInput.value = "";
 
    taskDate.value = "";
 
    priority.value = "High";
 
    displayTasks();
});
 
 
function displayTasks(){
 
    taskList.innerHTML = "";
 
    let search =
    searchInput.value.toLowerCase();
 
    let selected =
    filter.value;
 
 
    tasks.forEach(
    function(task,index){
 
        if(
            !task.name
            .toLowerCase()
            .includes(search)
        ){
            return;
        }
 
        if(
            selected === "pending"
            &&
            task.completed
        ){
            return;
        }
 
        if(
            selected === "completed"
            &&
            !task.completed
        ){
            return;
        }
 
 
        let li =
        document.createElement("li");
 
 
        let name =
        document.createElement("span");
 
        name.textContent =
        task.name + " ";
 
        if(task.completed){
            name.classList.add(
                "completed"
            );
        }
 
 
        let p =
        document.createElement("span");
 
        p.textContent =
        "[" + task.priority + "] ";
 
        p.classList.add(
            task.priority.toLowerCase()
        );
 
 
        let date =
        document.createElement("span");
 
        if(task.date !== ""){
            date.textContent =
            " 📅 " + task.date + " ";
        }
 
 
        let completeBtn =
        document.createElement("button");
 
        completeBtn.textContent =
        task.completed
        ? "↩ Undo"
        : "✅ Complete";
 
        completeBtn.onclick =
        function(){
 
            task.completed =
            !task.completed;
 
            displayTasks();
        };
 
 
        let editBtn =
        document.createElement("button");
 
        editBtn.textContent =
        "✏ Edit";
 
        editBtn.onclick =
        function(){
 
            taskInput.value =
            task.name;
 
            taskDate.value =
            task.date;
 
            priority.value =
            task.priority;
 
            editIndex =
            index;
 
            addBtn.textContent =
            "Update Task";
        };
 
 
        let deleteBtn =
        document.createElement("button");
 
        deleteBtn.textContent =
        "🗑 Delete";
 
        deleteBtn.onclick =
        function(){
 
            tasks.splice(
                index,
                1
            );
 
            displayTasks();
        };
 
 
        li.append(
            name,
            p,
            date,
            completeBtn,
            editBtn,
            deleteBtn
        );
 
        taskList.appendChild(li);
 
    });
 
    updateCounter();
}
 
 
function updateCounter(){
 
    let total =
    tasks.length;
 
    let completed =
    tasks.filter(
        task => task.completed
    ).length;
 
    let pending =
    total - completed;
 
    counter.textContent =
    "Total: " + total +
    " | Completed: " +
    completed +
    " | Pending: " +
    pending;
}
 
 
clearBtn.onclick =
function(){
 
    tasks = [];
 
    editIndex = -1;
 
    addBtn.textContent =
    "➕ Add Task";
 
    displayTasks();
};
 
 
searchInput.oninput =
displayTasks;
 
 
filter.onchange =
displayTasks;
 
 
taskInput.addEventListener(
"keydown",
function(event){
 
    if(event.key === "Enter"){
        addBtn.click();
    }
 
});
