const baseURL = "http://localhost:9200/"

function getUserByToken(token){
    
}

function getTasksByUserId(userId){
    
}

function getTasks(){
   
}

function getTaskById(id){
    return fetch(baseURL + `tasks/_doc/${id}`, {
        headers : {"Accept" : "application/json"}
        })
        .then(response => response.json())
        .then(body => body._source )
}

function createTask(text, userId){
    
}

export const data ={
    getTasks,
    getTaskById,
    createTask,
    getUserByToken,
    getTasksByUserId

}

export default data