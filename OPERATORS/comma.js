// virgül (comma



// burada ilk ifade 1 + 2 işleme giriyor fakar sonucu çöpe atılı
// sonrasından gelen 3 + 4 işlme giriyor ve sonuç olarak geri dönüyor.

// virgül operatörünü önceliği çok düşüktür. 
// parantezler olmadan a = 1 + 2 , 3 + 4 ifadesinden önce + işlemea alınır, deüerler toplanarak 3 ,7 ifadesine çevrilir ondan sonra atama operatörü ile a= y ataması yapılır ve sonuç olarak virgülden önceki sayı olan 3 işlnemeyerek yok sayılır. 
  
let a=  ( 1 + 2, 3 + 4  );

alert(a); // 7 (3 + 4 işleminin sonucu)

/// !! peki neden son satır hariç her şeyi yok sa yan bir operatör var .

// bazen bir satırda birkaç işlem yapılan karnaşık yapılarda bu operatörü kullanırız.  
// örneğin ;


// Bir satırda 3 farklı işlem
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//     ...
//    }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!  ben burda alert değerine ne yazılacağını bulamadım.