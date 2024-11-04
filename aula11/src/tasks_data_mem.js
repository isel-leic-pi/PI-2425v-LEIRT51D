const users = [
    {id : 11, userName : "Filipe", token : "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
    {id : 12, userName : "Joao", token : "3fa85f64-5717-4562-b3fc-2c963f66afa7" }
]

const tasks = [
    {id : 1, text : "study tds", userId : 11},
    {id : 2, text : "study isi", userId : 12}
]

let nextTaskId = 3

function getUserByToken(token){
    return users.find(u => u.token == token)
}

function getTasksByUserId(userId){
    return tasks.filter(t=>t.userId==userId)
}

function getTasks(){
   return tasks
}

function getTaskById(id){
   return tasks.find( t => t.id == id)
}

function createTask(text, userId){
    const task = {id : nextTaskId , text : text, userId}
    tasks.push(task)
    ++nextTaskId
    return task
}

export const data ={
    getTasks,
    getTaskById,
    createTask,
    getUserByToken,
    getTasksByUserId

}

export default data