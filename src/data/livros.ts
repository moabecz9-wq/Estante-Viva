export type Reading = {
    id: number;
    title: string;
    author: string;
    cover: string;
    progress: number;
}

export type Book = {
    id: number;
    title: string;
    author: string;
    cover: string;
    genre: string;
    rating: string;
}

export const readings: Reading[] = [
  { id: 1, title: 'O Hobbit', author: 'J.R.R. Tolkien', cover: './assets/img/capa-hobbit.png', progress: 45 },
  { id: 2, title: '1984', author: 'George Orwell', cover: './assets/img/capa-1984.png', progress: 72 },
  { id: 3, title: 'Duna', author: 'Frank Herbert', cover: './assets/img/capa-duna.png', progress: 30 },
  { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', cover: './assets/img/capa-sapiens.png', progress: 18 }
];

export const books: Book[] = [
  { id: 1, title: 'Dom Casmurro', author: 'Machado de Assis', cover: './assets/img/capa-dom-casmurro.png', genre: 'Romance', rating: '4,7' },
  { id: 2, title: 'Capitães da Areia', author: 'Jorge Amado', cover: './assets/img/capa-capitaes-da-areia.png', genre: 'Romance', rating: '4,6' },
  { id: 3, title: 'O Hobbit', author: 'J.R.R. Tolkien', cover: './assets/img/capa-hobbit.png', genre: 'Fantasia', rating: '4,8' },
  { id: 4, title: '1984', author: 'George Orwell', cover: './assets/img/capa-1984.png', genre: 'Distopia', rating: '4,7' },
  { id: 5, title: 'Sapiens', author: 'Yuval Noah Harari', cover: './assets/img/capa-sapiens.png', genre: 'História', rating: '4,5' },
  { id: 6, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', cover: './assets/img/capa-pequeno-principe.png', genre: 'Fábula', rating: '4,8' },
  { id: 7, title: 'A Hora da Estrela', author: 'Clarice Lispector', cover: './assets/img/capa-hora-da-estrela.png', genre: 'Romance', rating: '4,4' },
  { id: 8, title: 'Duna', author: 'Frank Herbert', cover: './assets/img/capa-duna.png', genre: 'Ficção científica', rating: '4,6' },
  { id: 9, title: 'Orgulho e Preconceito', author: 'Jane Austen', cover: './assets/img/capa-orgulho-e-preconceito.png', genre: 'Romance', rating: '4,5' },
  { id: 10, title: 'O Alquimista', author: 'Paulo Coelho', cover: './assets/img/capa-alquimista.png', genre: 'Aventura', rating: '4,2' },
  { id: 11, title: 'Hábitos Atômicos', author: 'James Clear', cover: './assets/img/capa-habitos-atomicos.png', genre: 'Autoajuda', rating: '4,6' },
  { id: 12, title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', cover: './assets/img/capa-bras-cubas.png', genre: 'Romance', rating: '4,6' }
];