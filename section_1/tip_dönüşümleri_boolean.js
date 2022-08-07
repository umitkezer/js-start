// Lojik operasyonlarda ( durum testlerinde bu operasyon işlenecek) otomatik olarak bu dönüştürme gerçekleşir.bunun yanında gerekli olduğunda Boolean(volue) da kullanılabilir. 

// Dönüçtürücü kuralları;

// 1 "boş" olan 0, veua boş karakter dizisi null, undefined,NaN gibi değerler "false" olur
// 2 diğer tüm değerler "true" olur 


// örn;
 

alert( Boolean(1)); // true
alert(Boolean(0));   //false

alert(Boolean("hello"));  // true
alert(Boolean(""));   // false

// !!!! dikkat : karakter olan "0" true olur

alert(Boolean("0")) ; // true
alert(Boolean( " ")); // true , içerisinde boşluk olan karakter dizisi de true olur. 

