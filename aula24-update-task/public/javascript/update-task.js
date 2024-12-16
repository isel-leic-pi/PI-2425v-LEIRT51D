window.addEventListener('load', loadHandler)

function loadHandler(){
    const buttonUpdate = document.querySelector('#btn_update')
    buttonUpdate.addEventListener('click', updateTaskHandler)
}
//PUT http://localhost:8080/api/tasks/id
//{text:}
function updateTaskHandler(){
    const taskId = document.querySelector('#task_id').value
    const taskText = document.querySelector('#task_text').value 

    if(!taskText){
        //document.querySelector('#message').innerText = "TextEmpty"
        document.querySelector('#message').innerHTML = 
            "<h1>TextEmpty</h1>"
        return
    } 

    const options = {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body : JSON.stringify({
            text : taskText
        })
    }
    fetch(`/api/tasks/${taskId}`, options)
        .then(resp => resp.json())
        .then(body =>{ 
            console.log(body)
            //document.location.href=`/tasks/${taskId}`
        })
    
}
