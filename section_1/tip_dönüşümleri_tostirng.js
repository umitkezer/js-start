// çoğu zaman operatörler ve fonksiyonlar otomatik olarak değeri doğru tipe dönüştrürler
// Buna tip dönüştürme denir .
// örneğin alert otomatik olarak verilen tüm değerleri karakter dizisine çevirir
// ve ekranda gösterir matematiksel operatör ise değerleri sayılara çevirir.
  // ** tabi doğrudan tipi sizin tarafınızdan değiştirilmesi gerek değişkenler vardır.


//   toString 

// bir değeri karakter dizisi olarak kullanmak istiyorsanız tostring kulanırsınız.

// örn; alert(değer) değeri gösterir.Ayrıca String(değer) de kullanılır.

let value = true;  //value = değer

alert(typeof value);  // "boolean"

value = String(value); // !!!!!" string " i gördüm aslında burda true görmem gerekir di  
alert(typeof value);  //karakter dizisi çıktı alınmaz 


//**** eğer false değeri karakter dizisi dönüştürme işlemine tabi tutarsanız "false"
// null' u tutarsanız "null" olur. 




/// NUMBER


// sayısal dönüştürme işlemleri matematiksel olarak otomatik olarak gerçekleşir.


alert("6" / "2"); // "3"  karakterler sayılara dönüştürülür ve işlem öyle yapılır.


//eğer isterseniz Number(volue/değer) fonkisiyonu ile değeri sayıya dönüştürebilirsinizç


let str = '123';

alert(typeof str); // string

let num = Number(str);  // !!!! number (sayı olan 123)

alert(typeof num); //(number ) ben burda bir çıktı almadım 




let age = Number('Any text instead(yerine) of a number ')

alert(age);   //NaN"Not a Number" (dönüştürülemedi)

//*** yazı kutusu sayı olmayan bit değer feldiğinde NaN değeri görünür.

// sayısal dönüştüme kuralları;

// DEĞER       SONUÇ

// undefined     NaN
// null          0 
// true false     1 veya 0 
// String        önce başta ve sondaki whitespace'lar silinirsonra kalan değer de hiçbit karakter yoksa sonuç: 0 
//             eğer içerisinde sayısal olmayan bir değer var ise NaN değerini alır

// EXAMPLES;

alert( Number("   123   "));  // 123
alert( Number("123z"));   // NaN  ( hata 'z' bir rakam değil )
alert( Number(true));  // 1 
alert( Number(false));  // 0 

/// ** undefined ve null'un aynı davaranmadıklarını bilin null 0 alırken undefined NaN değerini alır.


// EKLEME KARAKTERİ + 

// neredeyse tüm math operasyonları önce değeri sayılara çevirmeye çalışır. 
//eğer bir taraf sayıya çevrilmediyse bu durumda karakter aolarak diğeri ile birleştirme yapılır

alert( 1 +'2');  // '12' sağ tarafata karakter var 
alert('1'+ 2 );  // '12' sol tarafata karakter var.
// *** yukardaki gibi sadece bir tarafın karakter olması yeterlidir .Eğer 2 tarafta karaktet olursa 2 tarafta sayıya dönüşebilir bu durumda toplama işlemi yapar.



