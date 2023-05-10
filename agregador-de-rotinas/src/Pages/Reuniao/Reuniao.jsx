import { CardReuniao } from './components/CardReuniao/CardReuniao'
import './Reuniao.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FormsReuniao } from './components/FormsReuniao/FormsReuniao'
export const PageReuniao = () =>{
    const [reunioes, setReunioes] = useState([])
    const [inputForms, setInputForms] = useState(false)
    const params = useParams()
    
    useEffect(() => {
        buscarReunioes()
     },[]);

    async function buscarReunioes() {
        try {
          const response = await fetch(`https://api-trantor.vercel.app/v1/users/${params.id}`);
          const json = await response.json();
          setReunioes(json.reunioes);
        } catch (error) {
          console.log('Erro de solicitação', error);
        }
    }
    async function adicionarReuniao(forms) {
        setInputForms(!inputForms)
        await fetch(`https://api-trantor.vercel.app/v1/adicionarreuniao/${params.id}`, {
            method: "POST",
            body: JSON.stringify(forms),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }
    async function deletarReuniao(idReuniao) {
        const body = {
            idReuniao: idReuniao
        }
        await fetch(`https://api-trantor.vercel.app/v1/excluirreuniao/${params.id}`, {
            method: "DELETE",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }
    return(
        <>
            <main className='box-reunioes'>
                {reunioes.map(reuniao =>
                    <CardReuniao reuniao={reuniao} excluirReuniao={deletarReuniao}/>    
                )}
            </main>
            <button className='button-input-reuniao' onClick={() => setInputForms(!inputForms)}>Adicionar Reunião</button>
            {inputForms &&
                <FormsReuniao enviarForms={adicionarReuniao}/>
            }
        </>
    )
}