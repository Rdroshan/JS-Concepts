// Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    
}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;

}

// Magazine Constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);
// Still the construtor of the prototype of Magazine points to Book constructor. Hence we need to change it.
console.log(Magazine.prototype);
// Use Magazine constructor
Magazine.prototype.constructor = Magazine;


// Instantiate Magazine Object
const mag1 = new Magazine('Mag one', 'John Doe', '2018', 'Jan');

console.log(Magazine.prototype);