import { useState } from 'react'
import icone from '../../assets/Office work-amico.png'
import { Button } from './components/Button/Button.jsx'
import { Input } from './components/Input/Input.jsx'
import { useNavigate } from 'react-router-dom'
import './Login.css'
export const PageLogin = () =>{
    const navigate = useNavigate()

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const logar = async () =>{
        var user = ''
        const body = {
            "login": login,
            "senha":senha
        }
        await fetch('https://api-trantor.vercel.app/v1/login', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
            .then(response => response.json()) 
            .then(json =>
                user = json
            )
            .catch(err => console.log(err))

        console.log(user)
        if(user.auth == true) navigate(`/menu/${user.data._id}`)
    }
    return(
        <main className='section-login'>
            <img src={icone} alt="" className='icone-login-cadastro' />
            <div className='box-login'>
                <div className="box-inputs">
                    <Input placeholder={"Login"} onchange={(e) => setLogin(e.target.value)} />
                    <Input placeholder={"Senha"} onchange={(e) => setSenha(e.target.value)} />
                </div>
                <Button text={"Login"} onclick={logar}/>
            </div>
        </main>
    )
}