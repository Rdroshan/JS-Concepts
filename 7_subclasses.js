class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}

// Magazine subclass
class Magazine extends Book{
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}


// Instantiate Magazine object
const mag1 = new Magazine('mag one', 'John Doe', '2013', 'April');
console.log(mag1.getSummary());
console.log(mag1);