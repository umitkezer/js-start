// and && or'dan ||önce çalışır.

console.log(5 || 1 && 0); // 5 

// VEYA’da olduğu gibi VE’de de operatör bazen if yerine kullanılabilir.

const x = 1;

(x > 0) && console.log('Sıfırdan Büyük');
  
// Sağ taraftaki bildirim sadece değerlendirme oraya kadar gelebilirse çalışır. Bunun için de x>0'ın doğru dönmesi gerekmektedir.

const a =1;
if ( x > 0 ){
    console.log('Sıfırdan Büyük');
}



// && ile yazılan çeşidi daha kısa gibi görünse de aslında if ile yazılanın daha okunabilir olduğu açıktır.

// Bundan dolayı her yapıyı amacına göre kullanmanız önerilir. Eğer if kullanmak istiyorsanız if yazarak kullanın. Eğer VE kullanmak istiyorsnaız && yazarak kullanın.