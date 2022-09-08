console.log("first")
console.log("second")
console.log("third")

console.log("first");
setTimeout(()=> {
    console.log("second")
},3000);
console.log("third")

function f1(){
    f2();
    console.log("hello f1");
}
function f2(){
    console.log("hello f2");
}
f1();


console.log("App started")
setTimeout(function timer() {
    console.log('You clicked the button!');    
}, 2000);

console.log("Hi!");

setTimeout(function timeout() {
console.log("Click the button!");
}, 4000);

console.log("Welcome to loupe.");

//callback hell

function f1(){

     function f2(){

        console.log("hello world!!!")
            function f3(){
                
                function f4(){
                   
                } 
                
            } 
    }
}
f3();