import { useEffect,useState } from "react"
import { salvarCard, deletarCard } from "../../api.js"
import { Card } from "./components/Card/Card.jsx"
import './Kanban.css';
import { useParams } from "react-router-dom";
export const KanbanPage = () =>{
    const params = useParams()
    const [cards, setCards] = useState("")

    useEffect(() => {
       buscarCards()
    },[]);

    async function buscarCards() {
        try {
          const response = await fetch(`https://api-trantor.vercel.app/v1/users/${params.id}`);
          const json = await response.json();
          setCards(json.kanban);
        } catch (error) {
          console.log('Erro de solicitação', error);
        }
      }

    const gerarCard = async () =>{
        await salvarCard("Novo Card",[],null, params.id)
        buscarCards()
    }
    const excluirCard = async (e) =>{
        const idCard = e.target.value
        await deletarCard(idCard, params.id)
        buscarCards()
    }
    return(
        <main className="box-cards">
            {cards != "" && cards.map(card =>
                <Card cardJson={card} key={card.id} excluirCard={excluirCard}/>
            )}
            <button className="button-novo-card" onClick={gerarCard}>+</button>
        </main>
    )
}