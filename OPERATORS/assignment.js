// ASSİGNMENT (ATAMA)  

// atanma operatörü = dir. Öncelik sırasında en altlardadır. Böylece x = 2 * 2 + 1 
// ifadesi çalıştıpıunmda önce tümişlemler yapılır ardından '=' çalıştırılarak sonuç x içerisinde tutulur. 

let x = 2 * 2 + 1 ; 

alert(x);

// zincirleme atama yapmak şu şekilde mümkündür. 
 let a, b, c;
 a = b = c = 2 + 2 ;

 alert(a);
 alert(b);
 alert(c);   // burda tüm çıktılar da "4 " ' ü görürüz.

 // ** zincirleme atama sağdan sola doğru olur.
 // önce en sağdaki deüere atanır 2+2 değeri önce c'ye ardından b ve en son a ya atanır.
//  En son da tüm değişkenler aynı değeri alır.   

// !!!!!!!!! "=" operatörü değer döndürür 

// örneğin bir işlem yaptığınız da value (değer) x in içine yazılır. 


let k = 1;
let w = 2; 

let z = 3 - (k = w + 1)

alert(k);  // 3  k nın ilk önce 1 değerini aldığı halde en sop k değerine  başka bir değer atanmışıtır

alert(z);  // 0  

// örenkete (k = w + 1) in sonucu k ya atandıktan sonra 3 ten çıkarılıp z değerine atanmıştır.a

