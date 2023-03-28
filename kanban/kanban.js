window.onload = carregarCards()

function gerarTask(titulo){
    const div = document.createElement('div')
    const p = document.createElement('p')
    const button = document.createElement('button')
    div.classList.add('task')
    p.classList.add('titulo-task')
    button.classList.add('button-ver-task')
    p.innerHTML = titulo
    button.innerHTML = 'X'
    div.appendChild(p)
    div.appendChild(button)
    button.addEventListener('click', (event) =>{
        const divPai = event.target.parentElement
        div.parentElement.removeChild(divPai)
    })
    return div
}
function gerarbotaoAddTask(){
    const div = document.createElement('button')
    div.classList.add('button-nova-task')
    div.innerHTML = '+ New Task'
    div.setAttribute('onclick','addTask(event)')
    return div
}
function gerarInputTask(){
    const div = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')
    div.classList.add('box-input-nova-task')
    input.classList.add('input-nova-task')
    button.classList.add('button-input-nova-task')
    div.appendChild(input)
    div.appendChild(button)
    button.innerHTML = 'Add'
    button.addEventListener('click',(event) => {
        const box_task = event.target.parentElement.parentElement
        const valor_input = event.target.parentElement.children[0].value
        if(valor_input != ''){
            box_task.appendChild(gerarTask(valor_input))
            box_task.removeChild(div)
            box_task.parentElement.appendChild(gerarbotaoAddTask())
        }
    })
    return div
}

function addTask (event){
    const botao = event.target
    const pai = botao.parentElement
    const BoxTask = pai.children[1].parentElement
    BoxTask.removeChild(botao)
    BoxTask.children[1].appendChild(gerarInputTask())   
}

function gerarCard(titulo, tasks, jsonCard){
    const card = document.createElement('div')
    const boxTitulo = document.createElement('div')
    const tituloCard = document.createElement('input')
    const buttonExcluirCard = document.createElement('button')
    const boxTasks = document.createElement('div')
    const buttonNovaTask = gerarbotaoAddTask()
    card.classList.add('card')
    card.setAttribute('data-card', JSON.stringify(jsonCard))
    boxTitulo.classList.add('box-titulo-card')
    tituloCard.classList.add('titulo-card')
    buttonExcluirCard.classList.add('button-excluir-card')
    boxTasks.classList.add('box-tasks-card')
    card.appendChild(boxTitulo)
    card.appendChild(boxTasks)
    card.appendChild(buttonNovaTask)
    boxTitulo.appendChild(tituloCard)
    boxTitulo.appendChild(buttonExcluirCard)
    tituloCard.value = titulo
    buttonExcluirCard.innerHTML = 'X'
    if(tasks.length > 0){
        tasks.forEach(task => {
            boxTasks.appendChild(gerarTask(task))
        });
    }
    buttonExcluirCard.addEventListener('click', (event) => {
        const divPai = event.target.parentElement.parentElement
        divPai.parentElement.removeChild(divPai)
    })
    return card
}

function gerarNovoCard(tituloReq, tasksReq, idCardReq){
    const boxCards = document.querySelector('.box-cards')
    boxCards.insertBefore(gerarCard(tituloReq,tasksReq, idCardReq), boxCards.lastElementChild)
}

function carregarCards(){
    fetch('http://localhost:3030/v1/users/64209cbdbbc32b69db855820')
        .then(response => response.json())  
        .then(json => 
            json.kanban.forEach(element => {
                gerarNovoCard(element.titulo, element.tasks, element)
            })
        )   
        .catch(err => console.log('Erro de solicitação', err)); 
}

function salvarKanban(tituloCard, TasksCard, idCard){
    const body = {
            "card": {
                "titulo": tituloCard,
                "tasks": TasksCard,
            },
            "idCard": idCard
        }
        fetch('http://localhost:3030/v1/users/64209cbdbbc32b69db855820', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err))
}