// result  = a || b;    şeklinde gösterilir.
/*
mantıksal veya sadece booleam verileri değiştirme için kullanılır 
eğer iki değerden biri true ise sonu 'true' olur
diğer durumlarda sonuç 'false' olur
*/

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

/// her iki tafında false olmadığı her durum da sonuç true olacaktır.

/*eğer operanda yani işeme giren değerler boolean değilse boolean değere çevrilir.
sayı olan 1 true,0 ise false demektir. 
*/

if (1 || 0) {
  console.log("True");
}

const hour1 = 9;

if (hour1 < 10 || hour1 > 18) {
  console.log("Office off");
}

// birçok şart cümlesi ile if yapısı kurulabilir.

const hour = 0;
const weekend = false;

if (hour > 10 || hour > 18 || weekend || hour) {
  console.log("office off 1");
} else {
  console.log(" office on");
}

// burda saat aralığı false değer çıksada weekend değeri true olduğu için sonuç true yani office off consola yazdırılır.

// OR İLK DOĞRU DEĞERİ ARAR
// (or search the first correct value)

// result = value1 || value2 || value3

/*  or "||" operand ı şunları yapar 
-Soldan dağa olacak şekilde operandları değerlendirir.
-Her operand değerini boolean'a çevirir.
sonuç doğru ise True ise durur ve operandın.orninal değerine döner.
-Eğer tüm operandlar kontrol edilip ve son operanda döner.

*/
 


console.log(1 || 0 );  // 1 
console.log( true || ' insignificant' ); // true
console.log(null || 0 || 1 ); //  1
console.log(null || 0 || undefined || 0); // 0 hepsi yanlış sonucusuna döner.


// 1. Değşken veya ifadeler dizisinde ilk doğru değeri bulmak için 

/* bir dizi var ve içinde null/undefined değerler barındırmakta
siz ilk veriyi nulduuğunuzda döndürmek istiyosunuz. */


const currentUser = null ;
const defaultUser = 'active';

const name = currentUser || defaultUser || "unnamed" ;

console.log(name); // active 

// !!1!!! eğer currentUser ve defaultUser false olsaydı 'unnamed' yazısı çıkardı.


// ' Kısa devere değerlendirmesi. 

/*
- operantlar sadece değer değil ifade de olabilir
-or testlerini soldan sağa doğru yapar.
-doğru değer bulunduğunda döndürür.Bu olaya kısa devre değerlendirmesi dewnir.
- Tabi bunun ifadeler yan erkisi olabilir.
örn: örnek çalıştığında x e değer atanmıyacak. */


// const x;              x e değer atanmadığı için çalışmaz 
// true || (x = 1); 
// console.log(x);  tanımsız , çümnkü x = 1 idafesi çalıştırılmadı
 

// eğer if yapısında ilk değer false ise bir sonrakine bakılır bu da şu şekilde sonuç verir .   

let x ; 
false || (x = 1 );

console.log(x); // 1 



