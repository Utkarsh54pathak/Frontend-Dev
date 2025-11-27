// Book Class
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return "Book is already issued.";
        }
        this.isIssued = true;
        return "Book issued successfully.";
    }

    returnBook() {
        if (!this.isIssued) {
            return "Book is not issued.";
        }
        this.isIssued = false;
        return "Book returned successfully.";
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "1111"),
    new Book("Atomic Habits", "James Clear", "2222"),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "3333"),
    new Book("Harry Potter", "J.K. Rowling", "4444", true),
    new Book("Clean Code", "Robert C. Martin", "5555")
];

function getAvailableBooks() {
    return books.filter(book => !book.isIssued);
}

function issueBookByISBN(isbn) {
    const foundBook = books.find(book => book.isbn === isbn);
    if (!foundBook) {
        return "Book not found.";
    }
    return foundBook.issueBook();
}

console.log("Available Books:");
console.log(getAvailableBooks());
console.log(issueBookByISBN("2222"));
console.log(issueBookByISBN("4444"));
