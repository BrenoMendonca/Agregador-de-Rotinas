import './Task.css'
export const Task = ({titulo,excluirTask}) =>{
    return(
        <div className="task">
            <p className="titulo-task">{titulo}</p>
            <button className="button-excluir-task" value={titulo} onClick={excluirTask}>X</button>
        </div>
    )
}