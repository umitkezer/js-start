/*tekrarlayan işlemlerdew bir koşul oluşturarak 
koşula bağlı olarak bir koda  yazılabilir.*/
 

for (let i = 0 ; i < 10; i++ ){
    //kod
    // console.log(i);
    console.log("hello");
}

/*
döngü içine yazıla koşul doğru ise yazdılır.
koşul false olur ise konsola işletilmez 
i++ yazılmaz ise i her defasında 10 dan küçük olacağı için sürekli yazılır ama İ++ yazıldığında 1 arttıracağı için 9 dan son bulur
illaki i değerini yazdırmak zorunda değiliz "" tınaklar içinde "merhaba" değer değişebilir yazabiliriz 

 */

let total = 0 ;

for(let a = 0 ; a < 10 ; a++){
    total += a;
    console.log(total);
}




/*
diğerşimki 1 den 10 kadar ki değerlerin toplamını bulmak için 
total değişkeni tanımlayıp değer atayalım 
her gelen a değerine (total +0 a) şeklinde toplaconsole.log(total);

kod bloklarından çıktık tan sonra yazarsak bize toplam değeri verir 
let total = 0 ;

for(let a = 0 ; a < 10 ; a++){
    total += a;
}
console.log(total);



kod bloklarının içine yazdığımızda ,
let total = 0 ;

for(let a = 0 ; a < 10 ; a++){
    total += a;
    console.log(total);
}
 consolelog her 0 ile 10 kadar ki değerlierin toplamını verecektir  0 1 3 6 10 15 21 28 26 45

*/

