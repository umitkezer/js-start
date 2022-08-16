// Bazen birden fazla döngü içinden tek bir break ile çıkılma ihtiyacı duyulabilir. Örneğin aşağıdaki kodda döngü i ve j kordinatlarını ekranda gösterir:
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let deger = prompt(`Kordinattaki değer (${i},${j})`, '');
  
      // Burada döngüden çıkmak istersem ne yapmalıyım?
  
    }
  }

  console.log('finsh');

//   Eğer kullanıcı iptale basarsa döngü iptal edilmelidir.

// Normalde içerideki döngü için deger'e değer atadıktan sonra duruma göre içteki döngü kırılabilir. Fakat bu yeterli değildir. Bu gibi durumlarda Labels veya etiket ile sorun çözülebilir.

// etiket döngüden önce bir kolon ile döngüyü tanımlamak için kullanılır.

// etiketAdi: for (...) {
    // ...
//   }

ust_dongu: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let giris = prompt(`Kordinattaki değer (${i},${j})`, '');
  
      // Eğer iptal edildi veya boş bir değer girildiyse dışarıdaki döngüyü de kır.
      if (!giris) break ust_dongu; // (*)
  
      // değer ile bir şeyler yap.
    }
  }
  console.log('finsh');


//   Yukarıdaki kodda break ust_dongu adımına gelirse üste doğru ust_dongu aranır ve bulunduğu yerde kırılır.

// Böylece kontrol doğrudan (*), alert('Bitti!')ye geçer.

// Etiketi başka bir satıra geçirmekte mümkündür.

ust_dongu:
for (let i = 0; i < 3; i++) { abx }
 
// continue talimatı da etiket ile kullanılabilir. Bu durumda etiketin yazılı olduğu yere atlar.

// Etiketler “goto” değildir.
// Etiketler ile kodun herhangi bir yerine atlamak mümkün değildir.

// Örneğin aşağıdaki kod çalışmaz.

// break etiket;  // etikete atlar değil mi?.

// etiket: for (...)

// break/continue sadece döngünün içerisinde çalışabilir, ve doğal olarak etiketler de üst tarafa yazılmalıdırlar.


// Özet
// Bu konuda 3 farklı döngü işlendi:

// while – Her tekerrürden önce koşul kontrol edilir
// do..while – Koşul tekerrürden sonra kontrol edilir.
// for (;;) – Her tekerrürden önce koşul kontrol edilir. Farklı seçenekler mevcuttur.
// Sonsuz döngü yapmak için genelde while(true) kullanılır. Böyle döngüler de diğerleri gibi break talimatıyla kırılabilir.

// Eğer o anki tekerrür ile işimiz bitti ve bir sonrakine geçmek istiyorsanız continue kullanmanız lazım.

// break/continue ile döngüden önce yazılan etikete atlamak veya üst döngüyü kırmak mümkündür.