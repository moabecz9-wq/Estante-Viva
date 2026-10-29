import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="brand">
            <img src="./assets/img/logo.svg" alt="Logo da Estante Viva" />
            <h1>Estante Viva</h1>
          </div>

          <nav>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#lendo-agora">Lendo agora</a></li>
              <li><a href="#estante">Estante</a></li>
              <li><a href="#sobre">Sobre</a></li>
            </ul>
          </nav>

          <div className="actions">
            <button type="button">☾</button>
            <button type="button" className="menu-button">☰</button>
          </div>
        </div>
      </header>

      <main>
                <section id="inicio" className="hero">
          <div>
            <h2>Sua estante, sua vez</h2>
            <p>Descubra o que ler e acompanhe seu progresso.</p>
          </div>
          <img src="./assets/img/hero.png" alt="Estante de livros" />
        </section>
                <section id="lendo-agora">
          <header>
            <h2>Lendo agora</h2>
            <p>4 livros</p>
          </header>

          <div className="reading-list">
            <article className="reading">
              <figure>
                <img src="./assets/img/capa-hobbit.png" alt="O Hobbit" />
              </figure>
              <div>
                <h3>O Hobbit</h3>
                <p className="author">J.R.R. Tolkien</p>
                <div className="progress"><div className="progress-45"></div></div>
                <p className="percent">45% lido</p>
              </div>
            </article>

            <article className="reading">
              <figure>
                <img src="./assets/img/capa-1984.png" alt="1984" />
              </figure>
              <div>
                <h3>1984</h3>
                <p className="author">George Orwell</p>
                <div className="progress"><div className="progress-72"></div></div>
                <p className="percent">72% lido</p>
              </div>
            </article>

            <article className="reading">
              <figure>
                <img src="./assets/img/capa-duna.png" alt="Duna" />
              </figure>
              <div>
                <h3>Duna</h3>
                <p className="author">Frank Herbert</p>
                <div className="progress"><div className="progress-30"></div></div>
                <p className="percent">30% lido</p>
              </div>
            </article>

            <article className="reading">
              <figure>
                <img src="./assets/img/capa-sapiens.png" alt="Sapiens" />
              </figure>
              <div>
                <h3>Sapiens</h3>
                <p className="author">Yuval Noah Harari</p>
                <div className="progress"><div className="progress-18"></div></div>
                <p className="percent">18% lido</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default App