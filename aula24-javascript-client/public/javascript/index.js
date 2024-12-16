window.addEventListener('load', loadHandler)

function loadHandler(){
    const button = document.querySelector('#fetchButton')
    button.addEventListener('click', buttonHandler)
}
           
function buttonHandler(){            
   
    const textArea = document.querySelector('#text')
    textArea.innerText = "LOADING!!!!"
    const inputText = document.querySelector('#urlInput')
    const url = inputText.value
    fetch(url)
        .then(resp => resp.text())
        .then(body => textArea.innerText = body)
}