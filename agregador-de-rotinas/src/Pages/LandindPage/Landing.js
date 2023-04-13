import './Landing.css';
import logo from './images/logo.png'
import iconeBanner from './images/foguete.png'
import iconeQuemSomos from './images/Business support-amico.png'
import iconeKanban from './images/Kanban.png'
import iconePk from './images/PK.png'

export const Landing = () => {

  return (
    <>
      <header>
          <nav class="navbar">
              <a><img class="logo" src={logo}/></a>
              <ul class="nav-list">
                  <li><a href="/"></a>KanBan</li>
                  <li><a href="/"></a>Planning Poker</li>
                  <li><a href="/"></a>Reuniões</li>
                  <li><a href="/"></a>Sobre nós</li>
                  <li><a href="/"></a>Técnologias utilizadas</li>
              </ul>
          </nav>
      </header>
      <main>
          <section class="home">
          <div class ="home-text">
              <h1 class="text-1">Lorem ipsum dolor sit amet, <br/> adipiscing elit </h1>
              <h2 class="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          </div>
              <svg class = "FundoPreto-home"width="376" height="310" viewBox="0 0 376 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M146.051 216.905C91.8527 172.807 -25.804 145.845 26.0794 102.199C77.9627 58.5526 223.668 61.9196 277.866 106.017C332.064 150.114 360.992 198.488 309.109 242.134C257.225 285.78 200.248 261.002 146.051 216.905Z" fill="black"/>
              </svg>
                  <img class="home-img" src={iconeBanner} alt="Foguete" width ="401" height = "430" />       
          </section>

          <section class="quem-somos">
              <img class="quem-somos-img"src={iconeQuemSomos}alt="Subida" width ="401" height = "430" />  
              <div class="quem-somos-text">
                  <h1 class="text-1">Quem somos nós? </h1>
                  <h2 class="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              </div>
            </section>
            <section>
              <ul class="Big-Numbers">
                  <li>+100.00 <br/> Usuários</li>
                  <div class="divisa-numbers"></div>
                  <li>+40 <br/> Empresas</li>
                  <div class="divisa-numbers"></div>
                  <li>+10 000 <br/> Horas Salvas</li>
              </ul>
            </section>
          <section class="Kanban">
              <img class ="kanban-img"src={iconeKanban} alt="Kanban" width ="410" height = "300" />
              <div class="Kanban-principal">
                  <h1 class="conteudo-principal-text">Kanban</h1>
                  <h2 class="apresentacao-kanban">Ferramenta criada em solo Japones no Sec 20.</h2>
                  <button class="botao-kanban"> Clique aqui</button>
              </div>
          </section>
          
          <section class="PlanningPoker">
              <div class="Pk-principal">
                  <h1 class="conteudo-principal-text">Planning Poker</h1>
                  <h2 class="apresentacao-PK">Utilizado para ajudar na Sprint Planning</h2>
                  <button class="botao-kanban"> Clique aqui</button>
              </div>
                  <img class="pk-img" src={iconePk} alt="PK" width ="410" height = "300" />
          </section>

          <section class="Reuniao">
              <img class ="kanban.img" src={iconeKanban} alt="Kanban" width ="410" height = "300" />
              <div class="Reuniao-principal">
                  <h1 class="conteudo-principal-text">Kanban</h1>
                  <h2 class="apresentacao-reuniao">Ferramenta criada em solo Japones no Sec 20.</h2>
                  <button class="botao-kanban"> Clique aqui</button>
              </div>
          </section>
          <footer>
              <h1 class="rodape">Fortaleza 2023</h1>
          </footer>
      </main>
    </>
  )
}

