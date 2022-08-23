/*
-aynı bir sıra ile tekrar yapma ihtiyacı duyulabilir 
-döngü bir kod parçacığının birden fazla defa çalıştırlımasına denir.
*/



// WHİLE döngüsü
/*
while(koşul){
  kod
  veye dögünün gövdesi
}

koşul doğru iken(while) döngü gövdesinde bulunan kod çalışır.
örneğin aşağıdaki kod i<3 iken çalışır.
*/


let i = 0;
while (i<3){
  console.log(i);
  i++
}  // 0  1   2 


/*  döngünü gövdesinde bulumam kodun her çalımasına tekerrür(interation) denir
yukardaki gövdede 3 defa tekerrür etmiştir

eğer i++ gibi bir kod olmasaydı teoride kod sonsuza kadar devam ederdi 
pratikte ise tarayıcınız bu kodun uzun süre çalışmasını engeller sunucu tabanlı js yazdığımızda ise bu işlem durdurulur.
sadece karşılatırma değil bir ifade veya değişken koşul olabilir 
ehile döngüsü tarafından alınan tüm ifadeler boolean a dönüştürülür 
örn;
while (i !=0) while i de olabilir.*/



let a =3 ;
while(a ){ //   a değeri 0 olduğunda sonuç false olur ve dögü biter 
  console.log(a); //  3 2 1 
  a--;
}



/// !!!!!! eğer tek satır gövde vafsa süslü parantez kullanmaya gerek kalmaz 

let x =4 ;
while(a) console.log(a--);