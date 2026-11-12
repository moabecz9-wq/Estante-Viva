import type { Book } from "../data/livros"

type BookCardProps = {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <article className="book">
      <figure>
        <img src={book.cover} alt={book.title} />
      </figure>
      <h3>{book.title}</h3>
      <p className="author">{book.author}</p>
      <p className="genre">{book.genre}</p>
      <p className="rating">★ {book.rating}</p>
    </article>
  )
}
