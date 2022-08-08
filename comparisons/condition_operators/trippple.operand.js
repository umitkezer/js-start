// bazen alert / console.log( ); yerine bir değişkene değer atamak istenebilir.   


let entryPrimit ;
let age = 25;

if (age > 18 ){
    entryPrimit = true;
} else {
    entryPrimit = false ;

}
console.log(entryPrimit);



// "üçlü" veya " soru işarati" operatörü yukardaki işlemi daha loay yapmanızı sağlar   
// ü.tane operanddan oluşmasını sağlar js de 3 tane operandı olan başka bir oparetör yoktur. 

// let result = condition ? value1 : value2

// condition (şart/koşul ) değerlendirildikten sonra eğer doğru ise value1 yanlış dener ise value2 result değişkenine atanır.   
let age1 = 2
let entry = (age1 >18)? true : false ; /// burda pantezde kullanılmayabilir.

console.log(entry);