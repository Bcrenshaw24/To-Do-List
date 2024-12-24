const tasks = document.getElementById("tasks");
const addTask = document.getElementById("addTask"); 
addTask.addEventListener("click", () => { 
    let task = document.getElementById("task").value; 
    if(task === "") { 
        alert("Task cannot be empty") 
        return;
    }  
    if (task.length >= 40) { 
        alert('Task must be less than 40 characters');
        return;
    } 

    const div = document.createElement('button')
    div.classList.add('task-style') 
    div.textContent = task; 
    tasks.append(div) 
    document.getElementById("task").value = ""

}); 

tasks.addEventListener("click", (event) => { 
    const clicked = event.target; 
    clicked.remove(); 
});