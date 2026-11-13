export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div>
        <h2>Sua estante, sua vez</h2>
        <p>Descubra o que ler e acompanhe seu progresso.</p>
        <div className="search">
          <input type="text" placeholder="Buscar por título ou autor" />
          <button type="button">Buscar</button>
        </div>
      </div>
      <img src="./assets/img/hero.png" alt="Estante de livros" />
    </section>
  )
}
