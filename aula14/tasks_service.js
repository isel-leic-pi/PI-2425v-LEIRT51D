import data from './tasks_data_mem.js'

function getTasks(token){
    //TODO verify if userToken is not undefined
    //TODO verify if userToken is associated to user
    //TODO tasks of user
    return data.getUserByToken(token)
      .then(user => data.getTasksByUserId(user.id))
      .catch(error => {return {code : "e2" , message : "Not authorize"}})
      //Verify error code
    
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
 
 export const services ={
     getTasks,
     getTaskById,
     createTask
 }
 
 export default services