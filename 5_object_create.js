 // Object of Protos
 const bookProtos = {
     getSummary: function(){
         return `${this.title} was written by ${this.author} in ${this.year}`;
     },
     getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
     }
 }

//  console.log(bookProtos);

 // Create Object 
 const book1 = Object.create(bookProtos, {
    title: { value: 'Book one' },
    author: { value: 'John Doe'},
    year : { value: '2013'}

 });

 console.log(book1);
// book1.title = 'Book one';
// book1.author = 'John Doe';
//  console.log(book1.getSummary());
