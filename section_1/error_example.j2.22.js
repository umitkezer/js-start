[1, 2].forEach(alert)

// burda sadece 1 ve 2 çıktısını göreceksin

alert("Hata alcasınız")

[1, 2].forEach(alert)
 // kodu çalıştırırsanız ilk uyarı mesajını tek alırsınız 


 alert(" hşimdi ise beklendiğin gibiatasız");

 [1, 2].forEach(alert)

 //şimdi ise her 2 uyarıyı da görürürüz 
//  ilk yazılan kod bloğunda hata olmaasının sebebi js'de [...] den önce ; gelmeyeceğini 
//  varsayamasından dolayı hata alır.