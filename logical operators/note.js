// note1:

// -ve opratöründe değerlerin hepsi doğru ise en sondaki değer yazdırılır.

console.log('ela' && 56 && 'umit'); // umit

// -ilk değer yanlış ise doğrudan yazdırlır.

console.log(null && 12 && 43);  // null




// note2 : 

// veya operatöründe değerler arasında ilk true değer olan yazdırılır

console.log(0 || 12 || 'fenerbahce'); // 12

// hepsi yanlış ise sondaki değer alınır.

console.log(null || 0 || NaN); // NaN