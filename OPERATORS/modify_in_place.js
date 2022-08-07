// modify-in-place (yer değiştirme)  
// bazen bir değişken üzerinde bir operatör işlemi yaparız ve yeni oluşacak değerleri aynı değişkende tutmak ister 

// örn;
 let n = 2;
 n = n + 5;
 n = n * 2;
 alert(n); // 14

//  bu işlemler de += ve *= kullanılarak kısatılabilir ,
let a = 2 ;
a += 5;  // a  a=7(a =a + 5 ile aynı)
a *= 2;  //  a  a=14(a =a * 2 ile aynı)
alert(a);  //14



// ** kısa olan modify and assign aoperatörleri tüm aritmatik ve bitsel operatörler için mevcuttur /= -= vb

// Bu Tür operatöerler normal bit atanma(assignment)ile aynı önceliğe sahibtir bü yüzden diğer bitçak hesaplamalardan sonra çalışır. 


let x = 2; 
 x *= 3 + 5 ;
 alert(x); // 16 önce en sağdaki işlenm yapılır.