// bazı durumlarda koşula göre farklı eylemler yapılabilir.
// ' ?' operatörü veya if cümlesi bu koşulları kontrol etmenizi sağlar.
//  if cümlesi koşulu alır ve kontrol eder sonucunda true ise kodu çalıştırır.

let year = prompt("ECMAScript-2015 standarları hangi yıl yayınlanmıştır?", "");

if (year == 2015) alert("Yes that's right");

// burda çıkan pop up ta sadece 2015 değerini yazdığımız da çıktı alabiliriz .

// birden fazla komut çalıştıracaksak {} kullanabilirsin.

if (year == 2015) {
  alert(" Yes that's right");
  alert("Bravo");
}

if (3 > 2) {
  console.log("hello"); // hello yu consol a yazdırabiliriz.
} // burda if değeri true olduğu için çıktı yı aldık

if (3 < 1) {
  console.log("hello"); // consol da birşey göremeyiz.
}

let isLoggedin = true;

if (isLoggedin == true);
{
  console.log("Confrimed, the user is logged in");
}

// Boolean dönüştürme

// if(...) cümlesi parantez içine yazdığımız ifadeyi çalıştırır ve bunun sonucu boolean tipinde dönderir.

// 0, boş karakter "", null, undefined ve NaN false olarak döndürülür. bunlara falsy yenlışd eğerler denir.
// diğer tüm değerler true olur ve bunlara truthy doğru değerler denebilir..

// örneğin aşağıdaki kad satırı hiç bir zaman çalıştırılmaz.

if (0) {
  //0 false döndürür.
  console.log("gs");
}

// bu çalışacaktırher zaman
if (1) {
  alert("FENERBAHÇE");
}

// ŞART YAZMADAN ÖNCE KODUN DEĞERLENDİRİLMESİ YAPILABİLİR.

let result = year == 2015; // eşitliğin doğru yanlış değerledirmesini yapar.

if (result) {
  alert(result); // true
}

const a = "1";
const b = "123";

const condition = a === b;

if (condition) {
  console.log("I am fit to condition");
}

const c = "";

if (c) {
  console.log("I am in the c if block");
}

const d = "1";
const e = 1;

const condDouble = d == e;
const condTriple = d === e; // Her zaman bunu kullan

// Double sadece deger karsilastirmasi yapar
// Mumkun oldugunca double kullanilmaz. Program guvenligi icin
if (condDouble) {
  console.log("I am in the double equality if");
}

// Triple hem deger hemde tip karsilastirmasi yapar
if (condTriple) {
  console.log("I am in the triple equality if");
}
