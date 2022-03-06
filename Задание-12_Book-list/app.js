function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td><a href='#' class='delete'>x</a></td>
    `;

    list.appendChild(row);
}

UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.showAlert = function(msg, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book__form');

    container.insertBefore(div, form);

    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.clearFields = function() {
    const   title = document.getElementById('title').value = '',
            author = document.getElementById('author').value = '',
            isbn = document.getElementById('isbn').value = '';
}

document.getElementById('book__form').addEventListener('submit', (e) => {
    const   title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;


    const book = new Book(title,author, isbn);
    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {  
        ui.showAlert('Please fill in all fields!', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('Book added', 'info-succes')
        ui.clearFields();
    }

    e.preventDefault();
});

// delete
document.querySelector('.book-list').addEventListener('click', (e) => {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book deleted', 'info-succes');

    e.preventDefault();
})