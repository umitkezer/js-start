/*
continue, break in daha hafif versiyonudur.
döngüyü tamamen kırmaaz da zorla bir sonraki tekerrüre geçer (tabi koşul sağlınıyor ise .)
o anda tekrar eden değer ile işimiz bitti ve bir sonraki tekrara geçmek istediğinizde contiune kullanılır.

*/


for ( let i = 0; i<10 ; i++ ){
    if( i % 2 == 0 ) continue; /// eğer 2 ye tam bölünebiliyorsa bir sonraki adıma değere atlar.
    console.log(i); // 1, 3, 5, 7, 9, 
}

///// !! i ye 2 ye bölünebilme koşulu atandığı için çift değerler için dögü gövdesi durdulur,
// sonraki adıma adıma geçilir.adımabundan dolayı console.log sadece tek değerler için çalışır 




//CONTİUNE TALİMATI DÖNGÜ SAYISININ AZALMASINA YARDIMCI OLUR.

// tek değereler gösteren döngü aşağıdaki gibidir.   

for (let a = 0  ; a <10 ; a++){
    if(a%2){
        console.log(a); // 1, 3, 5, 7, 9,
    }
}


/*
Teknik açısından birbiri ile aynıdırlar. Her zaman continue bloğunun yerine if kullanabiliriz.

Tabi bunun yan etkisi döngü gövdesi içinde bir tane daha if kullanarak okunabilirliği düşürmektir. 
*/







// ‘if’ yerine ‘?’ kullanılıyorsa sağ tarafa ‘continue/break’ yazılmaz.
if(x>5){
    console.log(x);
    }else{
        // continue;
}



// // Yukarıdaki döngü ? ile yazılacak olursa:

// (i > 5) ? alert(i) : continue; // `continue` burada kullanılamaz!!!
// … sonrasında çalışmayı durdurur. Böyle kodlar yazım hatası verir.

// Bu da '?' işaretini if yerine kullanmamak için ayrı bir neden.