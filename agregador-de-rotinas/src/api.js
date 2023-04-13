export async function BuscarUser(){
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())  
        .then(json =>{
            return json
        })   
        .catch(err => console.log('Erro de solicitação', err)); 
}
export const salvarCard = async (tituloCard, TasksCard, idCard, idUser) => {
    const body = {
            card:{
                "titulo": tituloCard,
                "tasks": TasksCard,
            },
            idCard: idCard
        }
        await fetch(`https://api-trantor.vercel.app/v1/salvarkanban/${idUser}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
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