// bazı durumlarda '?' yerine if kullanılır.        

let company = prompt('js hangi firma tarafından kurulmuştur?','');

(company == 'Netscape') ? 
alert('treu') : alert('false');

/*  
soru işaretinin bu amaç doğrultusunda kullanılması önerilmez !!!!
- Koşula göre company =='netscape' , soru işaretrinden sonra birince veya ikinci bölüm çalışır 
-sonucu bir değere atanmamıştır
-amaç duruma göre doğrudan kodu çalıştırmaktır.


*/

let firma = prompt('JavaScript hangi firma tarafından yaratılmıştır?', '');

if (firma == 'Netscape') {
  alert('Doğru!');
} else {
  alert('Yanlış.');
}


/*
okurken kodu dikey olarak okuruz 
kodu bir kaç satıra sağıtılması okumayı uzun satıra göre saha kolay hale getirir.
'?' işaretinin kullanımı sadece o yada bu sorusudur 
daha uzun bit cümle için if kullanmalısınız .

*/
