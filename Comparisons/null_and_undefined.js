// null ile undefined(tanımlanmamış) eşitlik kontrolü.  
// Daha uç noktalara bakarsak

// null ile undefined başka değerler ile karşılaştırıldığında aralarında sezgisel olmayan davranışlar görülür.

// Sıkı eşitlik kontrolü için ===: Bu değerler farklıdır, çünkü her biri kendine has bir tiptir.


alert( null === undefined ); // false

// Sıkı olmayan eşitlik kontrolüne göre ==: bunlar birbirlerine eşit fakat başka hiçbir değere eşit değildirler.


alert( null == undefined ); // true

// Matematiksel karşılaştırmalar için < > <= >= null/undefined sayıya çevrilirler. null 0 olurken undefined NaN( not a number ) olur.

// Şimdi bu bildiklerinizle aşağıdaki şakalı örneklere bakabilirsiniz.







//  0 ile null ın karşılaştırılması. 

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true