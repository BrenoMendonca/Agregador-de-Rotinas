import icone from '../../assets/Office work-amico.png'
import { Button } from './components/Button/Button.jsx'
import { Input } from './components/Input/Input.jsx'
import './Cadastro.css'
export const PageCadastro = () =>{
    return(
        <main className='section-cadastro'>
            <img src={icone} alt="" className='icone-login-cadastro' />
            <div className='box-cadastro'>
                <div className="box-inputs">
                    <Input placeholder={"CPF"} />
                    <Input placeholder={"Login"} />
                    <Input placeholder={"Senha"} />
                </div>
                <div>
                <input type='checkbox' name='chkbox'/>
                <label htmlFor="chkbox">Eu li e concordo com os termos de uso</label>
                </div>
                <Button text={"Cadastrar"} />
            </div>
        </main>
    )
}