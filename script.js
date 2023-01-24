//mostrar ocultar div
const hidebtn = document.querySelector('#hideElements')
const listDiv = document.querySelector('#list')

//constantes para agregar elementos
const addItemImput = document.querySelector('#addItem') //input:text
const addItemButton = document.querySelector('#button#addItemButton')

//Evaluar si el input esta vacio, no debe agregar el elemento



//agregar los eventos al boton ocultar/mostrar
hidebtn.addEventListener('click', () => {
    if(listDiv.style.Display == 'none'){
        listDiv.style.Display = 'block'
        hidebtn.textContent = 'Ocultar'
    } else {
        listDiv.style.Display = 'none'
        hidebtn.textContent = 'Mostrar'
    }
})

//agregar elementos a la lista
addItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = addItemImput.value
    list.appendChild(li)
})