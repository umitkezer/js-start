// // yazımı

// alert(message);

// // bu ekrana message değişkenini çıkarı gelen "POP UP" da ok (tamam) basmadan kadda bir sonraki adıma geçmez.adıma

// alert("Hello");

// ekrana çıkan küçük pencereye (modal pencere) denir. 
// "Modal" sayfayı  kullanan kişinin bu durumda sayfayla iletişime geçemeyeceğini, başka tuşlara basamayacağını sadece bu pencere ile etkileşim kurabileceğini ifade eder  
// yani ok (tamam) basması beklenir.



// KULLANICIDAN BİLGİ İSTEME 

// "prompt" fonkisiyonun kullanılır. 
// bu fonction 2 tane argümana ihtiyaç duyar .
  

//  result ( sonuç) , title(başlık),  default (varsayılan)

// result = prompt(title[, varsayılan]); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// burda[] kullandığımda hata gösteriyor.

// modal penceresi içersinde bir yazı ve ok/cancel buntonları içerir. 
// başlık (title) kullanıcıya gösterilecek sayı
// default(varsayılan) opsiyonel bir 2. parametre Input(giriş) alanı için varsayılan değeri içerir.  

// kulanıcı giriş kutusuna istediğini yazar ve ok der yada cansel yada esc tuşuna basarak iptal eder  
// esc/cansel tuşuna bastığında null a dönderir.  
 
let age = prompt('How old are you?', 100)
alert(`You are ${age} years old!`);  // You are 100 years old!


// her zaman varsayılan;(default) değeri kullanın
// alert ta parantez içerisine ters kesme işareti kullanın.  
// ikinci parametreyi göndermezsek  Internet Explorer veri giriş ekranında "undefined" gösterir.  
// Bundan dolayı IE’de düzgün görünebilmesi için her zaman boşta olsa bir değer atamak önemli. Bu arada Edge browser’da bu problem görünmemektedir.  
// IE = Internet Explorer 

let ela = prompt("ela");

let test = prompt("Test",'');  // for  IE