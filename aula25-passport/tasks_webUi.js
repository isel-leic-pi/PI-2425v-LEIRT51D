
export function webUiFunction(services){

    function home(req, resp){
        resp.render("home", { username : getUserName(req)})
    }

    async function getTasks(req, resp){
        const tasks = await services.getTasks(getToken(req))
        resp.render("tasks-list",{tasks:tasks})
    }
    async function getTaskById(req, resp){
        const task = await services.getTaskById(req.params.taskId)

        resp.render("task-details",{task:task})
    }
    
    function createTaskView(req, resp){
        resp.render("create-task")
    }

    async function createTask(req, resp){
        const task = await services.createTask(req.body.text, getToken(req))
        resp.status(303).set("location", `/tasks/${task.id}`)
        resp.end()
    }

    async function deleteTask(req, resp) {
        //TODO const task = await services.deleteTasks(req.params.taskId, getToken(req))
        console.log("TODO DELETE")
        resp.redirect('/tasks')
    }

    async function updateTaskView(req, resp){
        const task = await services.getTaskById(req.params.taskId,getToken(req))
        resp.render("update-task", {task: task})
    }
    
    function getToken(req) {
        return req.user && req.user.token;
    }

    function getUserName(req) {
        return req.user && req.user.userName;
    }

    return {
        home,
        getTasks,
        getTaskById,
        createTask,
        createTaskView,
        deleteTask,
        updateTaskView
    }
    

}


