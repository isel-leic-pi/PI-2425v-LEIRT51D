const token = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

export function webUiFunction(services){

    function home(req, resp){
        resp.render("home")
    }

    async function getTasks(req, resp){
        const tasks = await services.getTasks(token)
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
        const task = await services.createTask(req.body.text, token)
        resp.status(303).set("location", `/tasks/${task.id}`)
        resp.end()
    }

    async function deleteTask(req, resp) {
        //TODO const task = await services.deleteTasks(req.params.taskId, token)
        console.log("TODO DELETE")
        resp.redirect('/tasks')
    }

    async function updateTaskView(req, resp){
        const task = await services.getTaskById(req.params.taskId,token)
        resp.render("update-task", {task: task})
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


