/*
satır sırasında değişkeni tanımlama 

seyaç değişkeni olan i döngüye girdiiğinde oluşturulur
buna "satır arası " değişken tanımlama denir
bu değişken sadece döngü içerisinde kullanılabilir . */

// for ( let i = 0; i<3; i++){
//   console.log(i);
// }
 // console.log(i);   "hata böyle bir değişken bulunamadı " hatası alınır 


//  değişken tanımlamak yerine var olan da kullanılabilir.


let a =0;

for(a = 0 ; a<3 ; a++){ // var olan değişkeni kullan 
  console.log(a );  // 0.1 .2
}

console.log(a); // 3 , görünür  halde değişken döngüsünün dışında tanımlandı.





// BAZI BÖLÜMLERİN PAS GEÇİLMESİ
/*
for dögününü her bölümü pas geçilebilir.
örn;   */

let i = 0 ;  // i tanımlanıp 0 değeri atandı 
for (; i <3 ; i++){ // 'başlangıç' a ihtiyaç yok 
  console.log(i);  // 0, 1, 2
}



// BASAMAK BİLGİSİ SİLMEKTE MÜMKÜN 

let w  = 0;
for (; w<3;){
  console.log(w++);  //   0, 1, 2
}   // dögü while (w<3) ile aynı oldu.





// ASLINDA  HERŞEYİ SİLEBİLİRİZ

for(;;){
  //sonsuz döngü
}


/// !!!!!!  dikkat ederseniz for döngüsü yazarken noktalı virgüller ; yazılmalıdır 
// aksi halde yazım hatası verir.