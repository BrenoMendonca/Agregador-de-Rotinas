import './Button.css'
export const Button = ({text, onclick}) =>{
    return(
        <button onClick={onclick} className="button-login-cadastro">
            {text}
        </button>
    )
}