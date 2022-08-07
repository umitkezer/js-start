// Büyüktür/küçüktür: a > b, a < b.
// Büyük Eşit/Küçük Eşit: a >= b, a <= b.
// Eşitlik kontrolü a == b (Dikkat ederseniz tek değil iki tane '=' işaretinden oluşuyor.
// Tek olanı a = b atama anlamına geliyor).
// Eşit değildir matematikte şu şekilde gösteriliyor ≠
// JavaScript’te ise eşittir öncesine ünlem işareti olarak kullanabilirsiniz a != b.

// SONUÇ BOOLEAN OLACAKTIR. 

// diğer operatörler gibi bunun sonucuda değere dönecektir.

alert(2 > 1);  // true (correct)
alert(2 == 1 ); // false (wrong)
alert(2 != 1);  // true (correct)


// bu karşılaştırmalara da değer atanabilir. 

let result = 5>4 ;
alert(result); // true 


// KARAKTER DİZİSİ KARŞILAŞTIRMA

// hangi karakter dizisini büyük olduğunu bulmak için alfabe sırasına bakılır. 

alert('Z' > 'A') ; // true 
alert('Kum' > 'Kan'); // True
alert('Bee' >'Be'); // true

// iki karakter dizisini karşılatıran algoritma bisit bir algoritmadır basamları şu şekildedir;   

// 1 iki karakter dizisinin ilk karakterleri karşılaştırılır. 
// 2 eğer birincisi ikincisinden büyükse, birinci karakter dizisi büyüktür.işlem biter.
// 3 eğer karakterler eşit ise ikinci karakteride aynı şekilde kontrol edilir.eğer ikincisi büyükse true döner. 
// 4 karakter dizilerini sonuna kadar test et . 
// 5 eğer sonuna kadar tüm karakterler aynıysa uzun olanı daha büyüktür.

// 1. örnekte 'Z' > 'A' dan büyüktür true olur   
// 2. de ise 'Kum' ve 'Kan' a bakalım

// K eşşittir K'ya
// u , a' dan büyüktür. işlem burda biter sonuç true olur.  

// 'a' 'A' dan daha büyüktür.  




// FARKLI TİPLERİN KARŞILAŞTIRILMASI

// farklı tipler karşılaştırıldığında sayılara dönüştürülürler.  

alert('2' > 1); // true '2' karakteri sayıya çevrilerek 2 olur ve böyle karşılatırılır.

alert('01' == 1 ); // true karakter olan '01' sayıya çevrilerek 1 olur.

// boolean değerleri için true 1 false 0 olur.

alert (true == 1 ); // true
alert( false == 0 ); // true

let a = 0;

alert(Boolean(a)); // falsa

let b = '0';
alert(Boolean(b)); // true

alert(a == b); // true


