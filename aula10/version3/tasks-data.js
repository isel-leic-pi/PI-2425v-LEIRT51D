const tasks = [
    {id : 1, text : "study tds"},
    {id : 2, text : "study isi"},
]

let nextTaskId = 3

function getTasks(){ 
    return tasks
}

function getTaskById(taskId){
    return tasks.find( t => t.id == taskId)
}

function createTask(txt){
   
    const task = {id : nextTaskId , text : txt}
    tasks.push(task)
    ++nextTaskId
    return task
}

export const data = {
    getTasks,
    getTaskById,
    createTask
}

export default data