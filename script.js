// constructor function for author
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// constructor function for books
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author; // Author object
    this.genre = genre;
    this.price = price;
}

// Method in the Book prototype to get book information
Book.prototype.getBookInfo = function () {
    return `<div class="book">
                <h2>${this.title}</h2>
                <p><strong>Author:</strong> ${this.author.name}</p>
                <p><strong>Genre:</strong> ${this.genre}</p>
                <p><strong>Price:</strong> $${this.price}</p>
            </div>`;
};

// Creating instances of Author and Book
let author1 = new Author('J.K. Rowling', 1965, 'British');
let author2 = new Author('George R.R. Martin', 1948, 'American');
let author3 = new Author('J.R.R. Tolkien', 1892, 'British');
let author4 = new Author('Agatha Christie', 1890, 'British');

let book1 = new Book('Harry Potter and the Sorcerer\'s Stone', author1, 'Fantasy', 20.99);
let book2 = new Book('A Game of Thrones', author2, 'Fantasy', 25.99);
let book3 = new Book('The Hobbit', author3, 'Fantasy', 15.99);
let book4 = new Book('Murder on the Orient Express', author4, 'Mystery', 18.99);
let book5 = new Book('The Da Vinci Code', author4, 'Mystery', 22.99);

// Displaying book details on the webpage
let bookstoreElement = document.getElementById('bookstore');
bookstoreElement.innerHTML = book1.getBookInfo() + book2.getBookInfo() + 
book3.getBookInfo()+book4.getBookInfo()+book5.getBookInfo();