const inputToDo = document.querySelector('#inputToDo')
const addBtn = document.querySelector('#addBtn')
const ul = document.querySelector('ul')
const filter = document.querySelector('#filter')
const select = document.querySelector('select')
let toDos = ['Träna', 'Laga mat', 'Handla']
displayToDo()

addBtn.addEventListener('click', function(event){
  event.preventDefault()
  toDos.push(inputToDo.value)
  displayToDo()
  inputToDo.value = ''
})

filter.addEventListener('input', function(event){
  event.preventDefault()
  displayToDo()
})

function displayToDo(){
  let filteredToDo = toDos.filter(function(toDo){
    return toDo.toLowerCase().includes(filter.value.toLowerCase())
  })

  ul.innerHTML = ''
  for(let i=0; i<filteredToDo.length; i++){
    const li = document.createElement('li')
    li.textContent = filteredToDo[i]
    ul.appendChild (li)
    deleteTodo(li, filteredToDo, toDos.indexOf(filteredToDo[i]))
  }
}

function deleteTodo(li, arr, todoIndex){
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Ta bort'
  li.append(deleteBtn)
  deleteBtn.addEventListener('click', function(event){
    event.preventDefault()
    toDos.splice(todoIndex, 1)
    displayToDo(arr)
  })
}




