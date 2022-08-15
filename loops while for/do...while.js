// do..while döngüsü kullanarak koşul kontrolünü sonda yapmak mümkündür. 


// do {
//     // döngü gövdesi
//   } while (condition);   Döngü önce gövdeyi çalıştırır, sonra koşul kontrolü yapar ve eğer doğruysa tekrar döngü gövdesini çalıştırır.


let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

/* 
Bu şekilde döngü yazımı çok nadir olarak kullanılır.
Kullanılmasının en önemli amacı en azından bir defa ne olursa olsun gövdenin çalıştırılma istenmesidir.
Genelde while(..){} şekli tercih edilir.
*/
