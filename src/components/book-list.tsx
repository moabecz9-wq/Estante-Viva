import type { Book } from "../data/livros"
import { BookCard } from "./book-card"
import { ViewToggle } from "./view-toggle"

type BookListProps = {
  books: Book[]
  view: string
  onSelectView: (view: string) => void
  loading: boolean
  error: string
}

export function BookList({ books, view, onSelectView, loading, error }: BookListProps) {
  return (
    <section id="estante">
      <header>
        <h2>Estante completa</h2>
        <p>{loading ? '...' : `${books.length} livros`}</p>
      </header>

      <ViewToggle view={view} onSelectView={onSelectView} />

      {loading && <p className="status">Carregando livros...</p>}

      {error && <p className="status error">{error}</p>}

      {!loading && !error && books.length == 0 && (
        <p className="status">Nenhum livro encontrado.</p>
      )}

      {!loading && !error && books.length > 0 && (
        <div className={view == 'lista' ? 'library-list list-view' : 'library-list'}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  )
}
