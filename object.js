// let objectName={
//     key1:"value",
//     key2:"value2",
// }

let student={
    name:"Tanisha",
    age:"19",
    address:"Bhopal",
    welcome:function(){
        return `hello my name is ${this.name} and age is ${this.age}`
    }
}
console.log(student.name);//access
student.gender="female";//added
console.log(student)

student.age=21;
console.log(student)//update
console.log(student.welcome())
