type HeroProps = {
  search: string
  onSearch: (value: string) => void
}

export function Hero({ search, onSearch }: HeroProps) {
  return (
    <section id="inicio" className="hero">
      <div>
        <h2>Sua estante, sua vez</h2>
        <p>Descubra o que ler e acompanhe seu progresso.</p>
        <div className="search">
          <input
            type="text"
            placeholder="Buscar por título ou autor"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
          />
          <button type="button">Buscar</button>
        </div>
      </div>
      <img src="./assets/img/hero.png" alt="Estante de livros" />
    </section>
  )
}
