//learning javascript
//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;
//console.log(age);
//numbers in javascript
var num1=10;
num1++;  //increment by 1
console.log(num1);
//functions
function fun() {
    console.log('this is a function');
}
fun();
//creating a function that will say hello followed by your name
/*function greeting(){
    var name= prompt('What is your name?');
    var result= 'Hello ' + name;
    console.log(result);
}
greeting();
*/
/*
//adding 2 numbers in a function
function sumNumbers(num1,num2){
var num1=10;
var num2=10;
var result= num1 +num2;
console.log(result);
}
sumNumbers();
//while loops
var num=0;
while(num <100){
    num +=1;
    console.log(num);
}
*/
/*
//For loop
for(let num =0; num<100; num++){
    console.log(num);
}
*/
/*
//data types
let yourAge=18;  //number
let yourName='Bett';  //string
let name={first: 'Emmanuel', last:'Bett'};  //object
let truth = false;  //boolean
let groceries = ['apple', 'banana'];  //array
let random;  //undefined
let nothing=null;  //value null
*/
//objects in javascript
let student={first: 'Emmanuel', last:'Bett'} 
console.log(student.first);

// conditionals,if else
var age=prompt('what is your age?');
if((age >=18) && (age <=40)){
    status = 'target demo';
    console.log(status);
}else{
    status= 'not my audience';
    console.log(status);
}
