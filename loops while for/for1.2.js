// !!! Satır arasında değişken tanımlama


for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
  }
//  console.log(i); // hata! böyle bir değişken bulunamadı.


// Değişken tanımlamak yerine var olan da kullanılabilir:

let a = 0 ;
for (a = 0; a < 3 ; a++ ){  // var olan değişkeni kullan
    console.log(a);  // 0, 1, 2
}

console.log(a); // 3, görünür halde çünkü değişken döngünün dışında tanımlandı.

/*
Bazı bölümlerin pas geçilmesi
for döngüsünün her bölümü pas geçilebilir.

Örneğin başlangıç bölümüne ihtiyaç yoksa pas geçilebilir.

Örneğin: */

let x = 0; // i'yi tanımlanıp 0 değeri atandı

for (; x < 3; x++) { // "başlangıç"'a ihtiyaç yok
  console.log(x); // 0, 1, 2
}



//1!!!! basamak bilgisini silmek de mümkün: 

let b = 0;

for (; b < 3;) {
  console.log(b++);
}



for (;;) {
    // sonsuz döngü
  } //  for döngüsü yazarken noktalı virgüller ; yazılmalıdır, aksi halde yazım hatası verir.