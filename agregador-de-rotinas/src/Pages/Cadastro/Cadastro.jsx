import icone from '../../assets/Office work-amico.png'
import { Button } from './components/Button/Button.jsx'
import { Input } from './components/Input/Input.jsx'
import './Cadastro.css'
import { useState } from 'react'
export const PageCadastro = () =>{
    const [user, setUser] = useState({
        login: "",
        senha: "",
        CPF: ""
    })

    const cadastrar = async () =>{
        const body = {
            "login": user.login,
            "senha": user.senha,
            "CPF": user.CPF,
        }
        
        const nulo = Object.values(body).some((valor) => valor == "");
        if(nulo){
            console.log("Forms Inválido")
        }else{
            await fetch('https://api-trantor.vercel.app/v1/users', {
                method: "POST",
                body: JSON.stringify(body),
                headers: {"Content-type": "application/json; charset=UTF-8"}
              })
                .then(response => response.json()) 
                .then(json =>
                    console.log(json)
                )
                .catch(err => console.log(err))
            }  
    }

    return(
        <main className='section-cadastro'>
            <img src={icone} alt="" className='icone-login-cadastro' />
            <div className='box-cadastro'>
                <div className="box-inputs">
                    <Input placeholder={"CPF"} onChange={(event) => setUser({ ...user, CPF: event.target.value })} />
                    <Input placeholder={"Login"} onChange={(event) => setUser({ ...user, login: event.target.value })} />
                    <Input placeholder={"Senha"} onChange={(event) => setUser({ ...user, senha: event.target.value }) } />
                    <Input placeholder={"Repetir Senha"} onChange={(event) =>setUser({ ...user, repetirSenha: event.target.value }) } />
                </div>
                <div>
                <input type='checkbox' name='chkbox'/>
                <label htmlFor="chkbox">Eu li e concordo com os termos de uso</label>
                </div>
                <Button text={"Cadastrar"} onclick={cadastrar}/>
            </div>
        </main>
    )
}