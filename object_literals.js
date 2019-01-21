const s = "hello";
// console.log(s.toUpperCase());

//Object literal
const book1 = {
    title: 'Book one',
    author: 'john Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} is written by ${this.author} in the year ${this.year}`; 
    }
};

console.log(book1.getSummary());
