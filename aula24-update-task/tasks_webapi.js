import {convertToHttpError} from './errors/http-errors.js'


export function webApiFunction(services){

    function getTasks(req, resp){
        console.log(req.query)
        services.getTasks(req.header('Authorization'))
            .then(tasks => resp.json(tasks))
            .catch(error => { 
                const httpError = convertToHttpError(error)
                resp.status(httpError.status).json(httpError.body)
            })
    }
    
    function getTaskById(req, resp){
        console.log(req.params)
        services.getTaskById(req.params.taskId, req.header('Authorization'))
            .then(task => resp.json(task))
            .catch(error => {
                const httpError = convertToHttpError(error)
                resp.status(httpError.status).json(httpError.body)
            })
       
    }
    
    function createTask(req, resp){
        console.log(req.body)
        services.createTask(req.body.text, req.header('Authorization'))
            .then(task => resp.status(201).json(task))
        
    }

    function updateTask(req, resp){
        /*services.updateTask(req.params.taskId, req.params.text, token)
            .then(task => resp.json(task))
            .catch( err  => {
                const httpError = httpErrors.convertToHttpError(err)
                resp.status(httpError.status).json(httpError.body)
            })
        */
       console.log("update tasks")
       resp.json("Task Updated")
        
    }
    
    return {
        getTasks,
        getTaskById,
        createTask,
        updateTask
    }
    

}


