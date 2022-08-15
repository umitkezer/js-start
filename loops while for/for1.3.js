/*
Döngüyü kırma

Normalde döngüler koşul yanlış olduğunda biter.

Fakat bazı durumlarda bu döngü kırılabilir ( break ).

Örneğin, kullanıcıdan bir dizi sayı girmesini istediniz eğer boş bir değer girerse döngüyü kırabilirsiniz.
*/

// let toplam = 0;

// while (true) {

//   let deger = +prompt("Bir sayı giriniz", '');

//   if (!deger) break; // (*)

//   toplam += deger;

// }
// alert( 'Toplam: ' + toplam );


/*
break talimatı (*) satırında görüldüğü üzere
Eğer kullanıcı boş değer girerse doğrudan döngü durur ve döngüden sonraki ilk satıra atlar. Yani alert çalışır.
“Sonsuz döngü” + break birlikte kullanıldığında başlangıçta koşul kontrol edilmese de olur ama döngü gövdesinde veya
sonunda kontrol edilmesi gerekir denen döngüler için güzel bir birliktelik oluşturur. 
Bu döngü içerisinde birçok defa koşul kullanılarak döngü kırılabilir */




/*
Bir sonraki tekerrüre geçme


continue, break in daha hafif versiyonudur. Döngüyü tamamen kırmaz da zorla bir sonraki tekerrüre geçer(tabi koşul sağlanıyorsa)

O anda tekrar eden değer ile işimiz bitti ve bir sonraki tekrar geçmek istendiğinde continue kullanılır. */

for (let i = 0; i < 10; i++) {

    // Eğer 2'ye bölünebiliyorsa bir sonraki adıma atlar.
    if (i % 2 == 0) continue;
  
    console.log(i);; // ekranda 1, 3, 5, 7, 9 değerleri gösterilir.
  }

//   i nin çift değerleri için döngü gövdesi durdurulur, sonraki adıma geçilir. Bundan dolayı alert sadece tek değerler için çalışır.


// !!!!!continue talimatı döngü sayısının azalmasına yardımcı olur.

// Tek değerler gösteren döngü aşağıdaki gibi de yazılabilir:

for (let e = 0; e < 10; e++) {

    if (e % 2) {
      console.log(e);       // konsolda 1, 3, 5, 7, 9 değerleri gösterilir.
    }
  
  }
  /*
  Teknik açısından birbiri ile aynıdırlar. 
  Her zaman continue bloğunun yerine if kullanabiliriz.
  Tabi bunun yan etkisi döngü gövdesi içinde bir tane daha if kullanarak okunabilirliği düşürmektir */

//   !!!!!!!!‘if’ yerine ‘?’ kullanılıyorsa sağ tarafa ‘continue/break’ yazılmaz.
//   break/continute talimatları '?' ile kullanılamazlar
  
//   Örneğin:
  
  if (h > 5) {
    console.log(h);
  } else {
    continue1;
  }



//   Yukarıdaki döngü ? ile yazılacak olursa:
  
  (t > 5) ? console.log(t) : continue12; // `continue` burada kullanılamaz!!!


//   … sonrasında çalışmayı durdurur. Böyle kodlar yazım hatası verir.
  
//   Bu da '?' işaretini if yerine kullanmamak için ayrı bir neden.