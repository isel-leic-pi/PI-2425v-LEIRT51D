import data from "./tasks-data.js"

function getTasks(limit){
    //verificar se limite é valido (e.g. positivo) 
    return data.getTasks()
}

function getTaskById(taskId){
    //Verificar se taskID é undefined
    //Verificar se existe a tasks
    return data.getTaskById(taskId)
}

function createTask(txt){
   //Verificar se txt é undefined
    return data.createTask(txt)
}

export const service = {
    getTasks,
    getTaskById,
    createTask
}

export default service