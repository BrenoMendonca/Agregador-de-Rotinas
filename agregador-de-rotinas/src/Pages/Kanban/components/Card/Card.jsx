import { useState } from 'react'
import { Task } from '../Task/Task.jsx'
import { editarCard } from "../../../../api.js"
import './Card.css'
import { useParams } from 'react-router-dom'
export const Card = ({cardJson, excluirCard}) =>{
    const params = useParams()
    const [jsonCard, setJsonCard] = useState(cardJson)
    const [input, setInput] = useState(false)
    
    const gerarInput = () =>{
        setInput(!input)
    }
    const excluirTask = (e) =>{
        const titulo = e.target.value
        const newTasks = jsonCard.tasks.filter(task => task !== titulo)
        const cardAtualizado = {
            _id: jsonCard._id,
            titulo: jsonCard.titulo,
            tasks: newTasks
        }
        setJsonCard(cardAtualizado)
        editarCard(cardAtualizado.titulo,cardAtualizado.tasks,cardAtualizado._id, params.id)
    }
    const adicionarTask = (e) =>{
        const novaTask = e.target.parentElement.children[0].value
        const newTasks = [...jsonCard.tasks, novaTask]
        const cardAtualizado = {
            _id: jsonCard._id,
            titulo: jsonCard.titulo,
            tasks: newTasks
        }
        setJsonCard(cardAtualizado)
        editarCard(cardAtualizado.titulo,cardAtualizado.tasks,cardAtualizado._id, params.id)
        setInput(!input)
    }
    const salvarTitulo = (e) => {
        const novoTitulo = e.target.value
        const cardAtulizado = { ...jsonCard, titulo: novoTitulo }
        setJsonCard(cardAtulizado)
      }
    return(
        <div className="card">
            <div className="box-titulo-card">
                <input className="titulo-card" type='text' placeholder={jsonCard.titulo} onBlur={salvarTitulo}/>
                <button className="button-excluir-card" value={cardJson._id} onClick={excluirCard}>X</button>
            </div>
            <div className="box-tasks-card">
            {jsonCard.tasks.map(task =>
                   <Task titulo={task} excluirTask={excluirTask} key={task}/>
                )}
            </div>
            {!input &&(
                <button className="button-nova-task" onClick={gerarInput}>+ New Task</button>
            )}
            {input &&(
                <div className='box-input-nova-task'>
                    <input type="text" className='input-nova-task' />
                    <button className='button-input-nova-task' onClick={adicionarTask}>+</button>
                </div>
            )}
        </div>
        )
}