alert ("Js it is ...");
books = [];

// Это функция для получения результата ввода с инпут
function addBook() { 
    let id_number = document.getElementById('id_number').value;
    let title = document.getElementById('title').value;
    let edition_year = document.getElementById('edition_year').value;
    let author = document.getElementById('author').value;
    let cost = document.getElementById('cost').value;
    let number_of_copies = document.getElementById('number_of_copies').value;
    
    //console.log (`id_number${id_number} title=${title} edition_year=${edition_year} author=${author}
    //cost=${cost} number_of_copies=${number_of_copies}`);
    
    let book = {
        id_number: id_number,
        title: title,
        edition_year: edition_year,
        author: author,
        cost: cost,
        number_of_copies: number_of_copies
    }
    //books.push('book');
    //console.log(`${title} = ` + 'the newbook is table');
    let hasBook = false;
    let bookSave = document.getElementById('book-save');
    let bookBd = document.getElementById('book-bd');

    for(let i = 0; i < books.length; i++) {
        let currentBook = books[i];
        if(book.id_number == currentBook.id_number) {
            hasBook = true;
            break;
        }
    }

    if (hasBook == book.id_number) {
        //return false;
        document.getElementById('book-save').style.visibility = "visible";
        //innerHtml.body = style.opacity = 0;
        document.getElementById('book-bd').style.visibility = "hidden";
    }
      else {
           books.push(book);
           document.getElementById('book-bd').style.visibility = "visible";
           //document.getElementById('form').style.opacity = "0";
           document.getElementById('book-save').style.visibility = "hidden";
    }
  console.log(books);
}


let tableArray = document.getElementById('tableArray')
let rowTableArray = document.createElement("tr");
tableArray.appendChild(rowTableArray);

addColumnToRow (rowTableArray, 'id_number');
addColumnToRow (rowTableArray, 'title');
addColumnToRow (rowTableArray, 'edition_year');
addColumnToRow (rowTableArray, 'author');
addColumnToRow (rowTableArray, 'cost');
addColumnToRow (rowTableArray, 'number_of_copies');
//document.querySelector('tableArray').appendChild(row)

function addColumnToRow(row, columnValue) {
    var column = document.createElement("td");
    column.innerHTML = columnValue;
    row.appendChild(column);
}
console.log (table_book);
function cleanFormInput() {
    document.getElementById('id_number').value = "";
    document.getElementById('title').value = "";
    document.getElementById('edition_year').value = "";
    document.getElementById('author').value = "";
    document.getElementById('cost').value = "";
    document.getElementById('number_of_copies').value = "";
}
function cleanButton () {
     document.getElementById('book-bd').style.visibility = "hidden";
     document.getElementById('book-save').style.visibility = "hidden";
}