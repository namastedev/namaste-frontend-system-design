const data = {
    authors: [
      { id: "1", name: "Chirag Goel", bookIds: ["101", "102"] },
      { id: "2", name: "Akshay Saini", bookIds: ["103"] },
    ],
    books: [
      { id: "101", title: "Namaste Frontend System Design", publishedYear: 2000, authorId: "1" },
      { id: "102", title: "Book 2", publishedYear: 2010, authorId: "1" },
      { id: "103", title: "Book 3", publishedYear: 2020, authorId: "2" },
    ],
  };
  


export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            console.log(parent);
            return data.authors.find(authorDetail => authorDetail.id === parent.authorId);

        },
    },
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(book => parent.bookIds.includes(book.id));
        }
    },
    Query: {
        authors: (parent, args, context, info) => {
            return data.authors;
        },
        books: (parent, args, context, info) => {
            return data.books;
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            console.log(args);
            const newBook = {...args, id: data.books.length + 1};
            data.books.push(newBook)
            return newBook;
        }
    }
}