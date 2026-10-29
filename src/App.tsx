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
      </main>
    </>
  )
}

export default App