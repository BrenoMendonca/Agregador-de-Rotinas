import { useState } from 'react';
import './Formsreuniao.css';
export const FormsReuniao = ({enviarForms}) =>{
    const [forms, setForms] = useState({
        titulo:"",
        tipo:"",
        descricao:"",
        pessoas: [],
        data:"",
        lider:"",
    })
    const adicionarEquipe = (e) =>{
        const pessoa = e.target.parentElement.children[0].value
        const pessoas = forms.pessoas
        pessoas.push(pessoa)
        setForms({ ...forms, pessoas: pessoas});
    }
    const excluirPessoa = (e) =>{
        const nomePessoa = e.target.parentElement.firstElementChild.innerHTML
        const index = forms.pessoas.indexOf(nomePessoa);
        const novaListaPessoas = forms.pessoas
        novaListaPessoas.splice(index, 1);
        setForms({ ...forms, pessoas: novaListaPessoas});
    } 
    const criarReuniao = () =>{
        enviarForms(forms);
    }

    return(
        <div className="form-reuniao">
            <div className='box-input'>
                <input type="text" id="inp-titulo" className='input' placeholder='Titulo' 
                onBlur={ (e) => setForms({ ...forms, titulo: e.target.value }) }/>
                <input type="text" id="inp-tipo" className='input'  placeholder='Tipo'
                onBlur={ (e) => setForms({ ...forms, tipo: e.target.value }) }/>
            </div>
            <textarea className="inp-descricao" placeholder="Descrição"
            onBlur={ (e) => setForms({ ...forms, descricao: e.target.value }) }>
            </textarea>
            <div className='box-input'>
                <input type="date" id="inp-data"  className='input' 
                onBlur={ (e) => setForms({ ...forms, data: e.target.value }) } />
                <input type="text" id="inp-lider"  className='input' placeholder="Lider"
                onBlur={ (e) => setForms({ ...forms, lider: e.target.value }) }/>
            </div>
            <div className='box-input-equipe'>
                <input type="text" className='input' id='input-equipe' />
                <button className='button-add-equipe' onClick={adicionarEquipe}>Adicionar</button>
            </div>
            <div className='box-equipe'>
                {forms.pessoas.map(pessoa =>
                    <div className='pessoa'>
                        <p className='titulo-pessoa'>{pessoa}</p>
                        <button value={pessoa} className="button-excluir-pessoa" onClick={excluirPessoa}>x</button>
                    </div>    
                )}
            </div>
            <button className='button-add-reuniao' onClick={criarReuniao}>Adicionar Reunião</button>
        </div>
    )
}