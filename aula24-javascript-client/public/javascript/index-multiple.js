window.addEventListener('load', loadHandler)

function loadHandler(){
    const button = document.querySelector('#fetchButton')
    button.addEventListener('click', buttonHandler)
}
           
function buttonHandler(){            
    const textAreas = document.querySelectorAll('.resultTextClass')
    //const textAreas = document.querySelectorAll('textarea')
    textAreas.forEach(ta => ta.innerText = "Loading!!!!!")
    const inputText = document.querySelector('#urlInput')
    const url = inputText.value
    fetch(url)
        .then(resp => resp.text())
        .then(body => textAreas.forEach(ta => ta.innerText = body))
}