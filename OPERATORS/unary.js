// // + iki formda bulunur. 
// // eğer unary + veya tek bir değerde kullanılar + işareti sayılar ile birşey yapmaz 
// // Fakat değer bu bir sayı değil ise sayıya çevirir. 

// let x = 1;
// alert(+x); // 1 

// let y = -2;
// alert(+y); // -2  sayılar üstünde bir etkisi yoktur

// alert(+true); // 1 
// alert(+"");  // 0   sayı olmayan değerleri çevirir.
// alert(+false); // 0 
// alert(+name); // 0 


// aslında Number(..) işlemnini daha kısa bir şekilde yapar.

let apple = '2 ' ;
let orange = '3' ; 

alert(apple + orange);  // '23', binary toplama iki karakter dizisini birleştiriyor.

// eğer sayı olarak kullanmak isttiyorsanız , önce dönüştürme işlemini yapmalısınız.  

alert( +apple + +orange); 5 

// alert(Number(aplle) + Number(orange));
// alert($[apple] + $[orange]);        // !! bu ikisinde çıktı alamadım. 

// öncelik olarak unary operatörü gerçekleşir. Buna yüksek öncelik denir





