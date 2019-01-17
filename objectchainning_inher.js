//Inheritance with the help of object chaining in js

//SuperType constructor function
function SuperType(){
    this.name = "Roshan"
}

//SuperType prototype
SuperType.prototype.getSuperName = function(){
    return this.name
}

SuperType.prototype.sex = "male";

//SubType prototype function
function SubType(){
    this.age = 26
}

//Inherit the properties from SuperType
SubType.prototype = new SuperType();
subType = new SubType();


console.log(subType.__proto__.getSuperName());
//console.log(SuperType.prototype.getSuperName());

//Add new property to SubType prototype
SubType.prototype.getSubAge = function(){
    return this.age;
}

//create a subType object
var subTypeObj = new SubType();
console.log();
console.log(subTypeObj.name);
console.log(subTypeObj.age);