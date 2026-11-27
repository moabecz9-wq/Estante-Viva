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
