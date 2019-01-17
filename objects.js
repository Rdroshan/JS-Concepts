function Human(first="A", lstname="B"){
    this.first = first,
    this.lstname = lstname,
    this.age = 20
    
    
}
Human.prototype.getFullname = function(){
    return this.first +" "+this.lstname;
}


var myObject = {
    "Other obj":{
        one:1,
        two:2
    }
}
var bracket = myObject["Other obj"];
bracket.newProperty = "This is a new property";
console.log(bracket.newProperty);
roshan = new Human("Roshan","Dawande");
console.log(roshan.age);





