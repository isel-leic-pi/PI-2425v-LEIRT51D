const users = [
    {id : 11, userName : "Filipe", token : "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
    {id : 12, userName : "Joao", token : "3fa85f64-5717-4562-b3fc-2c963f66afa7" }
]

const tasks = [
    {id : 1, text : "study tds", userId : 11},
    {id : 2, text : "study isi", userId : 12}
]

let nextTaskId = 3


//todo errors

function getUserByToken(token){
    const user = users.find(u => u.token == token)
    if(!user) return Promise.reject({code : "e1" , message : `${token} not found`})
    return Promise.resolve(user) 
}

function getTasksByUserId(userId){
    return Promise.resolve(tasks.filter(t=>t.userId==userId))
}

function getTasks(){
   return Promise.resolve(tasks)
}

function getTaskById(id){
   const task =  tasks.find( t => t.id == id)
   if(!task) Promise.reject({code : "e1" , message : `${id} not found`})
   return Promise.resolve(task)
}

function createTask(text, userId){
    const task = {id : nextTaskId , text : text, userId}
    tasks.push(task)
    ++nextTaskId
    return Promise.resolve(task)
}

export const data ={
    getTasks,
    getTaskById,
    createTask,
    getUserByToken,
    getTasksByUserId

}

export default data