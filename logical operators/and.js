// result = a && b ; // şeklinde gösterilir.

// AND operatörün de eğer iki operandda doğru ise true diğertürlü false' a döner ç

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// if ile bir örnek ;

const hour = 12;
const minute = 30;

if (hour == 12 && minute == 30) {
  console.log("12.30 o'clock");
}

// !1!!! or'da olduğu gibi and operandı da her türlü değeri kabul eder .
if (1 && 0) {
  console.log("çalışmaz çünkü sonuç 'yanlış");
}

// Deger atamasinda soldan saga boolean degerlerine bakar
const a = "asd" && 8 && "test";
console.log(a);


//  and ilk yanlış değeri görür 
/* result = value1 && value2 && value3 
-operandları soldan sağa doğru değerlendirir
-Her operandı boolean değere çevirir 
-eğer sonuç yanlış ise dur ve operatörün orjinal değerini döndürür.
-eğer diğer operand lara erişim sağlandıysa (hepsini doğru olma durumunda ) sondaki operandı döndürür. 
-OR OPERANDI İLE FARKI AND İLK YANLIŞ BULDUĞUNDA DÖNMESİ , OR OPERANDINDA İSE İLK DOĞRU BULDUĞUNDA DÖNMEKTEYDİ.
*/
// Eğer ilk operand doğru ise her halükarda ikincinin değeri dönecek.
console.log(1 && 0);  // 0
console.log(1 && 5 );// 5 
// İlk operand yanlış ise ilk operandı döner ikinci operand pas geçilir.
console.log(null && 5 ); // null 
console.log(0 && "does not matter"); // 0 


console.log(1 && 2 && null && 3 ); // null ( birden fazla and i if cümlesi ile kullanabiliriz.)

console.log(1 && 2 && 3); // 3 (tüm değerler doğru ise sonuncu değer döner.)




