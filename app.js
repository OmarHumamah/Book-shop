'use strict'

const tableHeaderArray = ['Book name', 'Book pages', 'Book price'];

function RndIntegerPages(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let booksArray = [];
function Books(name, price) {
    this.name = name,
        this.price = price,
        this.pages = 0,
        booksArray.push(this)
}

Books.prototype.randomPages = function () {
    this.pages = RndIntegerPages(1, 500)
}

//   new Books ('sa', 100)
//   booksArray[0].randomPages()
let table = document.getElementById('table');
function rdrTable(){
let tHederRow = document.createElement('tr');
table.appendChild(tHederRow);
for (let i = 0; i < tableHeaderArray.length; i++) {
    let tHeader = document.createElement('th');
    tHederRow.appendChild(tHeader);
    tHeader.textContent = tableHeaderArray[i];
}
let tHederBooksRow = document.createElement('tr');
table.appendChild(tHederBooksRow);
let th = document.createElement('th')
th.textContent = booksArray[0].name
}
function rdrRows(){
    for (let j = 0; j < booksArray.length; j++) {
        
        let tHederBooksRow = document.createElement('tr');
        
        table.appendChild(tHederBooksRow);
        let th = document.createElement('th')
        tHederBooksRow.appendChild(th);
        th.textContent = booksArray[j].name
        let th2 = document.createElement('th')
        tHederBooksRow.appendChild(th2);
        th2.textContent = booksArray[j].pages
        let th3 = document.createElement('th')
        tHederBooksRow.appendChild(th3);
        th3.textContent = booksArray[j].price
    }
}

let form = document.getElementById('form');
form.addEventListener('submit', handler);
function handler(event) {
    event.preventDefault();

    let newName = event.target.name.value;
    console.log(newName);
    let newPrice = event.target.price.value;
    console.log(newPrice);

    new Books(newName, newPrice)
    for (let i = 0; i < booksArray.length; i++) {

        booksArray[i].randomPages()

    }
    console.log(booksArray[0].name);
    table.textContent = '';
    rdrTable()
    
rdrRows()
    save ()
}

function save () {
let saveArray = JSON.stringify(booksArray)
localStorage.setItem('key', saveArray)
}


let savedArray = localStorage.getItem('key') 
let parsedArray = JSON.parse(savedArray);
if(parsedArray){
    for (let i = 0; i < parsedArray.length; i++) {
        new Books (parsedArray[i].name,parsedArray[i].price,)
        booksArray[i].randomPages()
    }
}
rdrTable()
rdrRows()