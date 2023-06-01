import './CardReuniao.css'
export const CardReuniao = ({reuniao, excluirReuniao}) =>{
    return(
        <div className="card-reuniao">
            <div className="box-titulo-reuniao">
                <p className="titulo-reuniao">{reuniao.titulo}</p>
                <button className="button-excluir-reuniao" onClick={() => excluirReuniao(reuniao._id)}>X</button>
            </div>
            <div className="box-data-button">
                <p className="tipo-reuniao">{reuniao.tipo}</p>
                <p className="data-reuniao">{reuniao.data}</p>
            </div>
            <div className='box-equipe-descricao'>
                <div className='box-equipe-card'>
                    <p className='lider-equipe-card'>{reuniao.lider}</p>
                    {reuniao.pessoas.map(pessoa =>
                    <p className='pessoa-equipe-card'>{pessoa}</p>
                    )}
                </div>
                <p className="descricao-reuniao">{reuniao.descricao}</p>
            </div>
        </div>
    )
}