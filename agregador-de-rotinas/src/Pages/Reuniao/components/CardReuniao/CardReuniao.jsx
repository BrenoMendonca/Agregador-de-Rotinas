import './CardReuniao.css'
export const CardReuniao = ({reuniao}) =>{
    return(
        <div className="card-reuniao">
            <div className="box-titulo-reuniao">
                <p className="titulo-reuniao">{reuniao.titulo}</p>
                <p className="tipo-reuniao">{reuniao.tipo}</p>
                <button className="button-excluir-reuniao">X</button>
            </div>
            <p className="descricao-reuniao">{reuniao.descricao}</p>
            <div className="box-data-button">
                <p className="data-reuniao">{reuniao.data}</p>
                <button className="button-saiba-mais">Saiba mais</button>
            </div>
        </div>
    )
}