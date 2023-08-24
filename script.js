function createBook(title, author) {
    return {
        title: title,
        author: author,
        isAvailable: true
    };
}

function createLibrary() {
    const books = [];

    function addBook(title, author) {
        const newBook = createBook(title, author);
        books.push(newBook);
    }

    function borrowBook(title) {
        const book = findBook(title);
        if (book) {
            book.isAvailable = false;
            console.log(`${title} has been borrowed.`);
        } else {
            console.log(`${title} not found in the library.`);
        }
    }

    function returnBook(title) {
        const book = findBook(title);
        if (book) {
            book.isAvailable = true;
            console.log(`${title} has been returned.`);
        } else {
            console.log(`${title} not found in the library.`);
        }
    }

    function listBooks() {
        console.log("Books in the library:");
        books.forEach(book => {
            const status = book.isAvailable ? "Available" : "Not Available";
            console.log(`${book.title} by ${book.author} - ${status}`);
        });
    }

    function findBook(title) {
        return books.find(book => book.title === title);
    }

    return {
        addBook: addBook,
        borrowBook: borrowBook,
        returnBook: returnBook,
        listBooks: listBooks
    };
}

// Creating a library instance
const library = createLibrary();

// Adding books to the library
library.addBook("The Hobbit", "J.R.R. Tolkien");
library.addBook("To Kill a Mockingbird", "Harper Lee");
library.addBook("2002", "book3");

// Borrowing and returning books
library.borrowBook("The Hobbit");
library.borrowBook("Harry Potter"); // Book not found
library.returnBook("The Hobbit");
library.returnBook("Harry Potter"); // Book not found

// Listing all books
library.listBooks();
