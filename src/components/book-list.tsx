import type { Book } from "../data/livros"
import { BookCard } from "./book-card"
import { ViewToggle } from "./view-toggle"

type BookListProps = {
  books: Book[]
  view: string
  onSelectView: (view: string) => void
}

export function BookList({ books, view, onSelectView }: BookListProps) {
  return (
    <section id="estante">
      <header>
        <h2>Estante completa</h2>
        <p>{books.length} livros</p>
      </header>

      <ViewToggle view={view} onSelectView={onSelectView} />

      <div className={view == 'lista' ? 'library-list list-view' : 'library-list'}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}
