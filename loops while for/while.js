// Çoğu zaman aynı bir sıra ile tekrar yapma ihtiyacı duyulabilirsiniz.
// Örneğin bir listede bulunan ürünlerin sıra ile çıktısını almak. Veya aynı kodu 1-10’a kadar olan sayılar için çalıştırmak.
// Döngü aynı kod parçacığının birden fazla defa çalıştırılmasına denir.



// while (koşul) {
    // kod
    // veya döngünün gövdesi
  // }   // gibi bir yazıma sahiptir.

//   koşul doğru iken(while), döngü gövdesinde bulunan kod çalıştırılır.

let i = 0;
while (i < 3) { // önce 0, sonra 1, sonra 2
console.log(i);  /// 0 ,1 ,2
  i++;
}

/*
Döngünün gövdesinde bulunan kodun her çalışmasına tekerrür(iteration) denir.
 Yukarıdaki örnekte gövde 3 defa tekerrür etmiştir.
 Eğer i++ gibi bir kod olmasaydı, teoride kod sonsuza kadar devam ederdi.
 Pratikte ise tarayıcınız bu kodun uzun süre çalışmasını engeller, sunucu tabanlı JavaScript yazdığınızda ise bu işlem durdurulur
 Sadece karşılaştırma değil, bir ifade veya değişken koşul olabilir.
 While döngüsü tarafından alınan tüm ifadeler boolean’a dönüştürülür.




 Örneğin, while(i != 0 ) while(i)'de olabilir. */

let a  = 3;
while (a) {  // i 0 olduğunda koşul `yanlış` olur ve döngü biter.
  console.log(a);  // 3 ,2 ,1 
  a--;
}



/* !!!! Tek satır gövde varsa süslü paranteze gerek kalmaz.
Eğer döngü gövdesi tek satır ise süslü parantezi yazmayabilirsiniz. {..}: */

let x = 3;
while(x)console.log(x--); //3, 2, 1