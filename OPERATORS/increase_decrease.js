// // increase/decrease (artırma/azaltma)  

// // bir sayıyı artırmak veya azaltmak sayısal bir operasyondur.  

// //** artırma "++" değişkenin değerini 1 artırır.

// // counter(sayaç)  

// let counter = 2;
// counter++;  // counter = counter + 1 ile aynı, kullınlma sebebi daha kısa prtaik.
// alert(counter); // 3 

// // azaltma "--" değişkenin değerini azaltır.  

// let num = 2;
// num--;  // num = num -1 anlamına gelir.
// alert(num); // 1 


// // !!!  increase/decrease sadece değişkenlere uygulanır.5++ gib bir kullanım hata vereceltir.

// // ** ++ ve -- operatörleri değişkenden önce veya sonra kullanılabilir.
// // operatör değişkenden sonra geliyorsa "postfix form" denir. counter++  
// // "prefix form" ise operatörün değişkenden önce geldiği durumdur. ++counter   
// // bu iki durumda da aynı işlem yapılır. counter değişkeni 1 artılır.  

// let number = 1;
// let a = ++number;

// alert(a); //2 

// //  ** satırda prefix konumdaki ++number number değişkenini artırrı ve yeni değer olan 2 ye döndürür. alert
// // olarak çıktıda biz de '2 ' değerini gösterir.  




// let age = 2;
//  let x = age++;

//  alert(x);  // 2 

// // satırda postfix formundaki age++ aynı şekilde age değişkenini arıtrır fakat bu sefer değişkenin eski değerini (artıma işlemi yapılmadan önceki hali) döndürür.alert çıkışı olarak yine eski değerini görürrüz .a


 
// // eğrer arttırma azaltna işleminin sonucunu kullanmıyorsak habgi formyu kullacağımızın bir anlamı yoktur  

// let size = 10;
// size++;
// ++size;
// alert(size); // 12  iki satırda da aynı işlem yapıldı 

// // eğer burda ;

// // let size = 10;
// // ++size
// // let a =size++;
// // alert(a);        // let a dan sonra bir postfix formn atadığımız için sadece bir önceki satırın eklemesini yapar alert olarak 11 i gösterir.

// // let size = 10;
// // size++
// // let a =++size;
// // alert(a); // 12    Burda prefix form atandığı için size değerin her satırda 1 arttırılır.


// //  *** eğer bir değer attırılacak ve yeni değer kullanılacaksa prefix form kullanılır.

// let pack = 0;
// alert(++pack); // 1 


// // ***  eğre attırma yapıcaksak ve ondan önceli değer kullanılacaksa postfix formu kullanılmalıdir.

// let phone = 0;  
// alert(phone++);  // 0 


// // diğer operatörlerde arasında artırma azalatma 
// //  ++/-- operatörleri  ayrıca bit ifadenin içerisinde de kullaılabilirler.öncelikleri diğer tüm operatörlerden önce gelir ..    

let pen = 1;
 alert (2 * ++pen);   //  4 

 let counter1 = 1 ; 
 alert(2 * counter1++ );  // 2  postmix form olduğu için önce ki değeri yazar.
 // *** bu counter++ işlemi pek önerilmez "bir satır- bir işlem " stili önerilir .

 let counter2 = 1;
  alert(2 * counter2 ); 
  counter2++  // 2  değeri alınır yine 
  



