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

