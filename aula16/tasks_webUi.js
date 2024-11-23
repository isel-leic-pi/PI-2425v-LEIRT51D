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
    
    function createTask(req, resp){
        resp.send(`<html>
            <head>
                <title>Tasks Application</title>
            </head>
            <body>
                <!-- Menu -->
                <a href="/"> Home </a>
                <a href="/tasks"> Tasks </a>

                <h1>Create TASKS</h1>
            </body>
        </html>`)
        
    }
    
    return {
        home,
        getTasks,
        getTaskById,
        createTask
    }
    

}


