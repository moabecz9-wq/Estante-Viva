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
                <section id="estante">
          <header>
            <h2>Estante completa</h2>
            <p>12 livros</p>
          </header>

          <div className="toggle">
            <button type="button" className="active">▦ Grade</button>
            <button type="button">☰ Lista</button>
          </div>

          <div className="library-list">
            <article className="book">
              <figure>
                <img src="./assets/img/capa-dom-casmurro.png" alt="Dom Casmurro" />
              </figure>
              <h3>Dom Casmurro</h3>
              <p className="author">Machado de Assis</p>
              <p className="genre">Romance</p>
              <p className="rating">★ 4,7</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-capitaes-da-areia.png" alt="Capitães da Areia" />
              </figure>
              <h3>Capitães da Areia</h3>
              <p className="author">Jorge Amado</p>
              <p className="genre">Romance</p>
              <p className="rating">★ 4,6</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-hobbit.png" alt="O Hobbit" />
              </figure>
              <h3>O Hobbit</h3>
              <p className="author">J.R.R. Tolkien</p>
              <p className="genre">Fantasia</p>
              <p className="rating">★ 4,8</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-1984.png" alt="1984" />
              </figure>
              <h3>1984</h3>
              <p className="author">George Orwell</p>
              <p className="genre">Distopia</p>
              <p className="rating">★ 4,7</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-sapiens.png" alt="Sapiens" />
              </figure>
              <h3>Sapiens</h3>
              <p className="author">Yuval Noah Harari</p>
              <p className="genre">História</p>
              <p className="rating">★ 4,5</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-pequeno-principe.png" alt="O Pequeno Príncipe" />
              </figure>
              <h3>O Pequeno Príncipe</h3>
              <p className="author">Antoine de Saint-Exupéry</p>
              <p className="genre">Fábula</p>
              <p className="rating">★ 4,8</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-hora-da-estrela.png" alt="A Hora da Estrela" />
              </figure>
              <h3>A Hora da Estrela</h3>
              <p className="author">Clarice Lispector</p>
              <p className="genre">Romance</p>
              <p className="rating">★ 4,4</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-duna.png" alt="Duna" />
              </figure>
              <h3>Duna</h3>
              <p className="author">Frank Herbert</p>
              <p className="genre">Ficção científica</p>
              <p className="rating">★ 4,6</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-orgulho-e-preconceito.png" alt="Orgulho e Preconceito" />
              </figure>
              <h3>Orgulho e Preconceito</h3>
              <p className="author">Jane Austen</p>
              <p className="genre">Romance</p>
              <p className="rating">★ 4,5</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-alquimista.png" alt="O Alquimista" />
              </figure>
              <h3>O Alquimista</h3>
              <p className="author">Paulo Coelho</p>
              <p className="genre">Aventura</p>
              <p className="rating">★ 4,2</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-habitos-atomicos.png" alt="Hábitos Atômicos" />
              </figure>
              <h3>Hábitos Atômicos</h3>
              <p className="author">James Clear</p>
              <p className="genre">Autoajuda</p>
              <p className="rating">★ 4,6</p>
            </article>

            <article className="book">
              <figure>
                <img src="./assets/img/capa-bras-cubas.png" alt="Memórias Póstumas de Brás Cubas" />
              </figure>
              <h3>Memórias Póstumas de Brás Cubas</h3>
              <p className="author">Machado de Assis</p>
              <p className="genre">Romance</p>
              <p className="rating">★ 4,6</p>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default App