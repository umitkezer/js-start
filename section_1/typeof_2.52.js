// // OBJELER ve SEMBOLLER
// Obje özel bir tiptir.

// Diğer tüm tipler “primitive” yani basit veya ilkel tiplerdir. Bu değişkenler sadece bir şey tutabilirler( karakter dizisi veya sayı ). Buna karşılık objeler veri koleksiyonları (collections) veya karmaşık yapılar tutabilirler. Objeler konusunda Obje daha derinlemesine incelenecektir.

// Symbol objeler için benzersiz tanımlayıcılar oluşturmak için kullanılır. Bu konuyu objeleri öğrendikten sonra öğrenmek daha iyi olacaktır.





//typeof operatörü

// typeof operatörü değişkenin tipini verir. 
// typeof argüman tipini bildirir. 
// 1.operatör olarak : typeof x . 
// 2.fonksiyonel tipte: typeof(x).  parantezli olarak veya parantezsiz çalışanilir sonuç aynı olacaktır 
// typeof x'i çalıştırdığınız da bu fonksiyon karakter dizisi (STRİNG) dönderir.


typeof undefined  // "undefined"

typeof 0   //"number"

typeof true     //"boolean"

typeof "foo"      //  "string"

typeof Symbol("id")     //"symmbol"

typeof Math // "object"  (1)

typeof null  // "object"  (2)

typeof alert  // "function"  (3)

// 1. Math matematiksel operasyonlar için kullanılacak js dilinde bir objedir
// sayılar konusunda buna değinilecektir.burda sadece objenin orneklendirilmesi için kullanılmıştır.

// 2. typeof null sonucu "object" dir. aslında yanlış.Bu typeof un bilinen bir  hatsıdır.
// eski versiyonlara uygunluk için bu şekilde bırakılmıştır.
// yoksa null bir obje değildir.
//js dilinin bir hatasıdır 

// 3. typeof alert fonksiyondur.
// çünkü alert dilde doğrudan var olan bir fonksiyondur.



