// en fazla kullanılan döngüdür .döngüdür 
/*
for (başla;koşul;adım){
  //döngü gövdesi

}
*/


for(let i = 0 ; i<3; i++){
  console.log(i);
}// shows 0, then 1 ,then 2 



/*
Bölüm bölüm inceleyecek olursak
bölüm		
başla 	i = 0	      Döngüye girildiğinde çalışır.
koşul	  i < 3	      Her tekerrürden önce çalışır, eğer yanlış ise döngü durur.
adım	  i++       	Gövdenin tekerrür etmesinden sonra fakat koşuldan önce çalışır
gövde	  alert(i)   	koşul doğru olduğu sürece durmadan çalışır*/


/*
Genel döngü algoritması aşağıdaki gibidir:

Çalışmaya başlar
→ (if koşul → gövdeyi çalıştır ve adımı çalıştır.)
→ (if koşul → gövdeyi çalıştır ve adımı çalıştır.)
→ (if koşul → gövdeyi çalıştır ve adımı çalıştır.)
→ ...

// for (let i = 0; i < 3; i++) alert(i)

// Çalışmaya başla
let i = 0
// if koşul → gövdeyi çalıştır ve adımı çalıştır
if (i < 3) { console.log(i); i++ }

*/


