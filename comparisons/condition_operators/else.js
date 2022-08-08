// if cümlesi opsiyonel olarak 'else' bloğu da içerebilir bu eğer if parantezi içerisinde yazdığımız kod yanlış ise çalışır .

const year = "2016";

if (year == 2015) {
  console.log("true");
} else {
  console.log("false");
}

// birden fazla koşul ' else if '

// bazı durumlkarda birden fazla durummu kontrol etmek gerekir bu durumlarda else if cümlesi kullanilir.

const age = 2015;

if (age < 2015) {
  console.log("after ");
} else if (age > 2015) {
  console.log("before");
} else {
  console.log(" definitely");
}

// function ifFn(value) {
//   if (value === "ergun") {
//     return "I am ergun";
//   }

//   if (value === "umit") {
//     return "I am umit";
//   }
// }


//// okunabilirlik adına elseif kullanmaktansa bir kaç satırda if i kullanmak okunabilirği arttırır.


