// multiply = çoklu
let age = 18;

let message =
  age < 3
    ? "soo cute "
    : age < 18
    ? "Hello"
    : age < 100
    ? "hello sir"
    : "ne garip bir yaşınınz var";

console.log(message);


// yada şöylede kullanılabilir. 

let num = 56;

if ( num < 3){
    message = 'soo cute';
} else if ( num < 18 ){
    message = 'hello';
} else if ( num < 100){
    message ='hello sir';
}else{
    message = 'you are very old';
}