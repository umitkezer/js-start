///** js de geğişkeni her türlü veriyi tutabilir. önce karakter dizisi (string) atansada daha sonra sayısal değer atanabilir.

let message = 'hello';
message = 123456;

alert(message); // 123456  

// bu şekilde olan dillere dinamil tip dil denir.

// NUMBER - SAYI 

let s =123;
s = 12.345;

// sayı hem integer (tam sayı) hemde  floating point ( ondalıklı sayılar )sayılar kulanılır.
 // dört işlem uygulanabilir. Normal dayılar haricinde "özel sayısal değerler"de sayı olarak yanımlanabilir.
 //bunlar: Infinity, -Infinity ve NaN gibi değerlerdir
//  örn;

alert(1 / 0); // Infinity (sonsuz)
alert(Infinity); // Infinity

// Nan hesaplamalarda bir hata olduğunu gösterir örn;

alert("Umit" / 2 ); // NaN hatası alınır

// **** NaN yapışkandır.NaN üzerinde yapılacak herhangi bir işlem yeniden Nan çıktısı alır.
 
alert("Umit" / 2  + 4 ); // NaN



/// BigInt - BÜYÜK SAYI
// JavaScript’te “number” türü, şundan büyük tamsayı değerlerini temsil edemez (253-1) (bu 9007199254740991), veya daha az -(253-1) negatifler için. Dahili temsillerinden kaynaklanan teknik bir sınırlamadır
// Bir tamsayının sonuna n eklenerek BigInt değeri oluşturulur:

const BigInt = 1234567890123456789012345678901234567890n;
alert(BigInt);