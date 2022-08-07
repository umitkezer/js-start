// normal eşitlik kontrolü "=="'nün bit problemi vardır. 0 ile false'ı birbirinden ayıramamktadır.ayıramamktadır

alert(0 == false); // true


// aynı şey boş karakterleriçin de geçerlidir. 

alert('' == false); // true

// bunun nedeni farklı tiplerdeki verilerin karşılatırmaya çalışılmasıdır.  
// her iki taraf da sayısal değerlere çevrilir.örneğin ' ' 0 onblur,aynı false'ın 0 olması gibi.
// !!!!!!!!!!!!!! false ile 0'ın biribirinden farklı olarak tanımlamak için ne yapılmalıdır?
// diğer bir deyişle a ve b iki farklı tip ise a ===b doğrudan false a döner..    
 
alert(0 === false); // false, çünkü tipler farklı.

// !!!! eşitsizliği belirtmek için !== operatörü de bulunmaktadırç.   


