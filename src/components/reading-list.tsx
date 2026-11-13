import type { Reading } from "../data/livros"
import { ReadingCard } from "./reading-card"

type ReadingListProps = {
  readings: Reading[]
}

export function ReadingList({ readings }: ReadingListProps) {
  return (
    <section id="lendo-agora">
      <header>
        <h2>Lendo agora</h2>
        <p>{readings.length} livros</p>
      </header>

      <div className="reading-list">
        {readings.map((reading) => (
          <ReadingCard key={reading.id} reading={reading} />
        ))}
      </div>
    </section>
  )
}
