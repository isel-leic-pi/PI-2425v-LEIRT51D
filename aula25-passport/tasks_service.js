import errors from "./errors/tasks-errors.js"

export function servicesFunction(data){

  function validateUser(username, password){
    return data.getUserByUsername(username)
            .then(user => {
                if(user.password === password) return Promise.resolve({userName : user.userName , token : user.token})
                else return Promise.reject(errors.INVALID_CREDENTIALS())
            })
}

  function getTasks(token){
    //TODO verify if userToken is not undefined
    //TODO verify if userToken is associated to user
    //TODO tasks of user
    return data.getUserByToken(token)
      .then(user => data.getTasksByUserId(user.id))
      .catch(error => Promise.reject(errors.NOT_AUTHORIZE()))
      //TODO verify error
 }
 
 function getTaskById(id,token){
    //TODO verify if id and token are not undefined 
    //TODO verify if userToken is associated to user
    //TODO get user task
    //TODO verify if user is owner
    return data.getTaskById(id)
 }
 
 function createTask(text,token){
    //TODO verify if text and token are not undefined
    //TODO verify if token is associated with user

    return data.getUserByToken(token)
      .then(user => data.createTask(text, user.id))   
 }

 
 return {
     getTasks,
     getTaskById,
     createTask,
     validateUser
 }
 
 
}

