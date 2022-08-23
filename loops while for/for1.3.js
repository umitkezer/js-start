/*
Normalde döngüler koşul yanlış olduğunda biter.

Fakat bazı durumlarda bu döngü kırılabilir ( break ).

Örneğin, kullanıcıdan bir dizi sayı girmesini istediniz eğer boş bir değer girerse döngüyü kırabilirsiniz
*/



let total = 0;

while (true) {
  let value = +prompt("Enter a Number", "");

  if (!value) break;

  total += value;
}

alert("Total: " + total);


// // break talimatı (*) satırında görüldüğü üzere. 
// Eğer kullanıcı boş değer girerse doğrudan döngü durur ve döngüden sonraki ilk satıra atlar. 
// Yani alert çalışır.

// // “Sonsuz döngü” + break birlikte kullanıldığında başlangıçta koşul kontrol edilmese de olur ama 
// döngü gövdesinde veya sonunda kontrol edilmesi gerekir denen döngüler için güzel bir birliktelik oluşturur.
//  Bu döngü içerisinde birçok defa koşul kullanılarak döngü kırılabilir.
