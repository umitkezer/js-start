// for döngüsü en fazla kullanılan döngüdür.


// for (başla; koşul; adım) {
//     // ... döngü gövdesi ...
//   }  //şeklinde gösterilir.

//   Örnekler üzerinden incenecek olursa. Aşağıdaki döngü alert(i) yi i 0 dan 3 olana kadar çalıştırır.(3 dahil değil)  

for (let a = 0; a < 3; a++) { // shows 0, then 1, then 2
    console.log(a);
  }


/*  bölüm		

  başla	    i = 0   	Döngüye girildiğinde çalışır.
  koşul 	i < 3	    Her tekerrürden önce çalışır, eğer yanlış ise döngü durur.
  adım	    i++	        Gövdenin tekerrür etmesinden sonra fakat koşuldan önce çalışır
  gövde 	alert(i)    koşul doğru olduğu sürece durmadan çalış
  */


//   Genel döngü algoritması aşağıdaki gibidir:

// Çalışmaya başlar
// → (if koşul → gövdeyi çalıştır ve adımı çalıştır.)
// → (if koşul → gövdeyi çalıştır ve adımı çalıştır.)
// → (if koşul → gövdeyi çalıştır ve adımı çalıştır.)
// → ...


// for (let i = 0; i < 3; i++) alert(i)

// Çalışmaya başla
let i = 0
// if koşul → gövdeyi çalıştır ve adımı çalıştır
if (i < 3) { console.log(i); i++ }
// if koşul →  gövdeyi çalıştır ve adımı çalıştır
if (i < 3) { console.log(i); i++ }
// if koşul →  gövdeyi çalıştır ve adımı çalıştır
if (i < 3) { console.log(i); i++ }
// ...bitir, çünkü şimdi i=3