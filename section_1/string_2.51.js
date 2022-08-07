//String - KARAKTER DİZİSİ
//JS de karakterler tırnaklar içine alınır .
let str = "Heloo";
let str2 = 'Elanur'; // tek ve çift tırnaklar arasında bir fark yoktur.
let pharse = `değer gömülebilir ${str}`; // ters tırnak ise 'genişletilmiş fanksiyonlu' dur.
console.log(`${str} ${str2} ${1 + 2}`);
// Bunu kullanarak karakter dizisi içerisine ${...} gibi başka bir dizi yazabilirsiniz örn;

let name ='Ahmet';

// değişken gömmme
alert(`Heloo , ${nae}`);

/// ifade gömme
alert(`sonuç : ${1 + 2}`);

// ${...}  içerisinde yazılan ifade çalıştıpında karakter dizisinin bir parçası olur
// ${..} içerisine her şeyi koyabiliriz değişken adı veya matematiksel ifade 1+ 2 gibi.$
// bunu sadece ters tırnakla yapabilirsiniz.

alert("sonuç : ${1 + 2}" ); // burda çıktı olarak "sonuç ${1+2}"alırsınız sebebi normal tırnak kullanmak.


// BOOLEAN (DOPRUY/YANLIŞ) TİPİ 
//  *** Boolean tipi (true/false) olmak üzere 2 değer tutabilir.


let namControl = true;
let ageControl = false;

// ayrıcı karşılaştırma ( büyük küçük eşittir gibi) sanuçları boolean verir.

let big = 4 ;
alert(big); // true (cevap görüldüğü gibi doğru çıkacaktır)

//Null değeri

// **** "null" değeri yukarıda tanımlanan hiçbir tipe dahil değildir.
// kendi başına null değeri tutar 

let age1 = null;

//Javascriptte null olmayan objeyi referans göstermez veya başka dillerdeki gibi “null pointer” değildir.

// “olmayan”, “boş”, “bilinmeyen değer” anlamında bir özel değerdir.

// Yukarıdaki yas boş veya bilinmeyen bir değerdir.

//  "UNDEFİNED" (tanımsız) DEĞERİ
// Bir diğer özel değer ise undefineddır. Kendi başına null gibi bir değerdir.

// undefined anlam olarak “herhangi bir değer atanmamıştır” anlamına gelir

let x;

alert(x); // undefined çıktısı alır 
 // teknik olarak undefined değerine herhangi bir değişkene atamak mümkündür 
 let y = 123;

 y = undefined ;

 alert(y); // undefined çıktısı alır yine. fakat bu şekilde tanımlanmasa daha iyi olur
 // Normalde null kullanılarak değişkenin boş veya bilinmeyen olduğu tanımlanır.
 // undefined değişkene bir değişkene değer atanmış mı sorosunu kontrol eder.


