// // KARAKTER DİZİSİ BİRLEŞTİRME binary + 

// // js de  operatörlerin özel durumlardan birisi karakter dizilerini + işareti ile birleştirilebilmesidir.  
// Normal şartlarda + iki sayıyı toplama yaparken eğer bir tarafı karakter dizisi ise 
// bu durumda birleştirmeye yarar

let s = "my" + "string"; 
alert(s);   // mystring

 /// !! Eğer iki operand'dan birisi karakter dizisi ise diğeri ne olursa olsun karakter dizisine çevrilir.

//  örn;

alert('1' + 2) ; // 12
alert(2 + '1');   // 21 
 
// görüldüğü gibi ilk veya ikinci operand ın karakter dizisi olması bir şeyi değiştirmez.
// kural her iki taraftan birisi karakter dizisi ise diğeride karakter dizisine çevrilir ve birleştirirlir.
// Bu durum sadece '+' için geçerlidir çıkarma,çarpma ,bölme için farklıdır.

alert( 2 - ' 1');  // 1 
alert('6' / '2') ;  //3
