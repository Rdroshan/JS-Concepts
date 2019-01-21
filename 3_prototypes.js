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

//get Age
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}
const book1 = new Book('Book one','John Doe', 2013);
const book2 = new Book('Book two', 'Jane Doe', '2016');

console.log(book1.getAge());
console.log(book2.getAge());