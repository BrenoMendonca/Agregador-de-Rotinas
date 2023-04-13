import { CardReuniao } from './components/CardReuniao/CardReuniao'
import './Reuniao.css'
import { useParams } from 'react-router-dom'
export const PageReuniao = () =>{
    const params = useParams()
    const reunioes = [
        {
            titulo:"Lorem ipsu dolor",
            tipo:"Operacional",
            descricao:"Lorem ipsu dolor sit amei,Lorem ipsu dolor sit amei Lorem ipsu dolor sit ameiLorem ipsu dolor sit ameiLorem ipsu dolor sit amei",
            data:"12/03/2023"
        },
        {
            titulo:"Lorem ipsu dolor sit amei",
            tipo:"Operacional",
            descricao:"Lorem ipsu dolor sit amei,Lorem ipsu dolor sit amei Lorem ipsu dolor sit ameiLorem ipsu dolor sit ameiLorem ipsu dolor sit amei",
            data:"12/03/2023"
        }
    ]
    
    return(
        <main className='box-reunioes'>
            {reunioes.map(reuniao =>
                <CardReuniao reuniao={reuniao}/>    
            )}
        </main>
    )
}