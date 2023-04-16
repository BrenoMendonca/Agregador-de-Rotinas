import iconePk from '../../Pages/LandindPage/images/PK.png';
import iconeKanban from '../../Pages/LandindPage/images/Kanban.png';
import iconeReuniao from '../../Pages/LandindPage/images/reuniao.jpg';
import { BoxMenu } from './components/BoxMenu/BoxMenu';
import { useParams, useNavigate } from 'react-router-dom';
import './Menu.css'
export const PageMenu = () =>{
    const params = useParams()
    const navigate = useNavigate()

    const opcoes = [
        {
            iconeMenu: iconeKanban,
            titulo:"Kanban",
            redirect:`/kanban/${params.id}`
        },
        {
            iconeMenu: iconeReuniao,
            titulo:"Reunião",
            redirect:`/reuniao/${params.id}`
        }
    ]
    return(
        <main className="section-menu">
            {opcoes.map(opcao =>
                <BoxMenu iconeMenu={opcao.iconeMenu} titulo={opcao.titulo} onclick={() => navigate(opcao.redirect)}/>
            )}
        </main>
    )
}