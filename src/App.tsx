import { useState } from "react"
import './App.css'
import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { Hero } from "./components/hero"
import { ReadingList } from "./components/reading-list"
import { BookList } from "./components/book-list"
import { readings, books } from "./data/livros"

function App() {
  const [view, setView] = useState("grade");

  function handleSelectView(newView: string) {
    setView(newView)
  }

  return (
    <>
      <Header />

      <main>
        <Hero />
        <ReadingList readings={readings} />
        <BookList
          books={books}
          view={view}
          onSelectView={handleSelectView}
        />
      </main>

      <Footer />
    </>
  )
}

export default App
