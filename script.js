alert ("Js it ...");

const books = [];

function addBook() {
    const book = getBookFromInput();
    
    if(bookExists(book)) {
        showErrorStatus();
        return;
    }
    
    books.push(book);
    showSuccessStatus();
    addBookToTable(book);
    console.log(books);
}

function bookExists(book) {
    for (let i = 0; i < books.length; i++) {
        let currentBook = books[i];
        if (book.id_number == currentBook.id_number) {
            return true;
        }
    }
    return false;

}

function getBookFromInput() {
    let id_number = document.getElementById('id_number').value;
    let title = document.getElementById('title').value;
    let edition_year = document.getElementById('edition_year').value;
    let author = document.getElementById('author').value;
    let cost = document.getElementById('cost').value;
    let number_of_copies = document.getElementById('number_of_copies').value;

    return createBook(id_number, title, edition_year, author, cost, number_of_copies);
}

function createBook(id_number, title, edition_year, author, cost, number_of_copies) {
    return {
        id_number: id_number,
        title: title,
        edition_year: edition_year,
        author: author,
        cost: cost,
        number_of_copies: number_of_copies
    };
}

function addBookToTable(book) {
    let tableArray = document.getElementById('tableArray');
    let rowTableArray = document.createElement("tr");
    tableArray.appendChild(rowTableArray);
    addColumnToRow(rowTableArray, book.id_number);
    addColumnToRow(rowTableArray, book.title);
    addColumnToRow(rowTableArray, book.edition_year);
    addColumnToRow(rowTableArray, book.author);
    addColumnToRow(rowTableArray, book.cost);
    addColumnToRow(rowTableArray, book.number_of_copies);
    console.log(`${book.title} = ` + 'the newbook is added to table');
}

function showSuccessStatus() {
    document.getElementById('sucsess').style.visibility = "visible";
}

function addColumnToRow(row, columnValue) {
    var column = document.createElement("td");
    column.innerHTML = columnValue;
    row.appendChild(column);
}

function showErrorStatus() {
    document.getElementById('error').style.visibility = "visible";
}

function cleanFormInput() {
    document.getElementById('id_number').value = "";
    document.getElementById('title').value = "";
    document.getElementById('edition_year').value = "";
    document.getElementById('author').value = "";
    document.getElementById('cost').value = "";
    document.getElementById('number_of_copies').value = "";
}

function hideStatus () {
     document.getElementById('sucsess').style.visibility = "hidden";
     document.getElementById('error').style.visibility = "hidden";
}

/*    IndexOf array

console.log(books[0]) - first element;
console.log(books[1]) - next element;
console.log(books[books.lenght -1]) - finish element;

*/