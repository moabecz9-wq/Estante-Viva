export function Footer() {
  return (
    <footer id="sobre">
      <div className="container">
        <div className="columns">
          <div>
            <h3>Estante Viva</h3>
            <p>Sua estante, sua vez.</p>
          </div>

          <div>
            <h3>Navegar</h3>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#lendo-agora">Lendo agora</a></li>
              <li><a href="#estante">Estante</a></li>
            </ul>
          </div>

          <div className="contact">
            <h3>Contato</h3>
            <ul>
              <li><a href="#sobre">E-mail</a></li>
              <li><a href="#sobre">Redes sociais</a></li>
            </ul>
          </div>
        </div>

        <p>© 2026 Estante Viva</p>
      </div>
    </footer>
  )
}
