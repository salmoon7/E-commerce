

// function Person(name,birthYear){
//     this.name = name;
//     this.birthYear = birthYear;


//     this.getDetails = function(){
//         return 'Name: ' + this.name + 'birthYear: ' + "Age" +(2023 - this.birthYear);
//     }
// }

// Person('john' , "2002")
// console.log(this.getDetails());

class Person{
    constructor(name,YearOfBirth) {
        this.name = name;
        this.BirthYear=YearOfBirth;
    }
    getDetails =()=> {
        return `Name: ${this.name} Age: ${2023-this.BirthYear}`
    }  



}

class Pilot extends Person{
    constructor(exp,type,license){
        super('John wick',2002);
            this.experience =exp;
            this.type=type;
            this.license=license;
    }

    getData=()=>{
        return`Experience: ${this.experience}  Type: ${this.type} License: ${this.license}`;

    }

}
 let john=new Pilot(23,'Private jet', 'JCD12234')
 john.getData(); 