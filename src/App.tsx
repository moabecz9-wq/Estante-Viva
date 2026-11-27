import { useState, useEffect } from "react"
import './App.css'
import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { Hero } from "./components/hero"
import { ReadingList } from "./components/reading-list"
import { BookList } from "./components/book-list"
import { readings } from "./data/livros"
import type { Book } from "./data/livros"

function App() {
  const [view, setView] = useState("grade");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    fetch("/livros.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Resposta inválida do servidor")
        }
        return response.json()
      })
      .then((data: Book[]) => {
        setBooks(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Não foi possível carregar os livros. Tente novamente mais tarde.")
        setLoading(false)
      })
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark]);

  const filteredBooks = books.filter((book) =>
    (book.title + " " + book.author).toLowerCase().includes(search.toLowerCase())
  )

  function handleSelectView(newView: string) {
    setView(newView)
  }

  return (
    <>
      <Header dark={dark} onToggleDark={() => setDark(!dark)} />

      <main>
        <Hero search={search} onSearch={setSearch} />
        <ReadingList readings={readings} />
        <BookList
          books={filteredBooks}
          view={view}
          onSelectView={handleSelectView}
          loading={loading}
          error={error}
        />
      </main>

      <Footer />
    </>
  )
}

export default App
