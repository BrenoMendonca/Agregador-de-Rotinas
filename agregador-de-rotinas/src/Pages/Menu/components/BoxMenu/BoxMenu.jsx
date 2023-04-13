import { Link } from "react-router-dom";
import './Boxmenu.css';
export const BoxMenu = ({iconeMenu, titulo, onclick}) =>{
    return(
        <div className="box-menu">
            <img src={iconeMenu} alt="" className="icone-menu"/>
            <p className="titulo-menu">{titulo}</p>
            <button onClick={onclick} className="button-acessar">Acessar</button>
        </div>
    )
}