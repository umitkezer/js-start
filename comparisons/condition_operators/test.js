/*
    - Boolean islemleri
    - Comperision - conditions
    - double equality vs triple equality (== vs ===)
*/

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


const year = ('ela hangi yıl doğmuştur ');

if (year === 2012){
console.log('true');
}else {
    console.log('ela bu yıl doğdu');

    
}