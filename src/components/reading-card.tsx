import type { Reading } from "../data/livros"

type ReadingCardProps = {
  reading: Reading
}

export function ReadingCard({ reading }: ReadingCardProps) {
  return (
    <article className="reading">
      <figure>
        <img src={reading.cover} alt={reading.title} />
      </figure>
      <div>
        <h3>{reading.title}</h3>
        <p className="author">{reading.author}</p>
        <div className="progress"><div className={`progress-${reading.progress}`}></div></div>
        <p className="percent">{reading.progress}% lido</p>
      </div>
    </article>
  )
}
