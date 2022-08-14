// // 1
// console.log(null || 2 ||undefined);  // 2 


// 2
console.log(console.log(1)||2||console.log(3)); // cevap önce 1 sonra 2 



// alert(alert(1)||2||alert(3));

/*
- alert çağrısı bir değer döndürmez .diğer bir deyişle undefined döndürür -
öncelikle birinci operand doğru olduğundan 1 çıktısını alırız 
-bu uyarı ekranında undefined döner ve ikinci değere bakılır çünkü daha doğru bulunamadı ve 2 doğru olduğu için çıktı alınır.
- 3 değer ekrana çıkmayacaktır çünkü değerlendirme sonuncu operanda gelmeden bitecektir.
*/

// 3
console.log(1 && null && 2 ); //null



// 4
