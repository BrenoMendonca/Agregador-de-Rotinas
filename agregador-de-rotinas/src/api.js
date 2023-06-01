export async function BuscarUser(){
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())  
        .then(json =>{
            return json
        })   
        .catch(err => console.log('Erro de solicitação', err)); 
}
export const adicionarCard = async (tituloCard, TasksCard, idCard, idUser) => {
    const body ={
                "titulo": tituloCard,
                "tasks": TasksCard,
            }
        await fetch(`https://api-trantor.vercel.app/v1/adicionarcard/${idUser}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err))
}

export const editarCard = async (tituloCard, TasksCard, idCard, idUser) => {
    const body = {
            "card":{
                "titulo": tituloCard,
                "tasks": TasksCard,
            },
            "idCard": idCard
        }
        await fetch(`https://api-trantor.vercel.app/v1/editarcard/${idUser}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8","Accept": "*/*"}
          })
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err))
}
export const deletarCard = async (idCard, idUser) => {
    const body = {
            "idCard": idCard
        }
        await fetch(`https://api-trantor.vercel.app/v1/excluircard/${idUser}`, {
            method: "DELETE",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err))
}