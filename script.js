// 1. Yaradılan funksiya iki parametr tələb edir : məsafə və zaman.

// 2. Şərtlər :        

//             1. Əgər avtomobilin ortalama sürəti 0-60 km/s arasıdırsa 100km-ə ortalama 6 litr yanacaq sərf edir.

//             2. Əgər avtomobilin ortalama sürəti 60-90 km/s arasıdırsa 100km-ə ortalama 9 litr yanacaq sərf edir.

//             3. Əgər avtomobilin ortalama sürəti 90-120- km/s arasıdırsa 100km-ə ortalama 8 litr yanacaq sərf edir.

//             4. Əgər avtomobilin ortalama sürəti 120 km/s-dan çoxdursa 100km-ə ortalama 10 litr yanacaq sərf edir.

// 3. Funksiya çıxışda "130 km yolu 2 saat müddətinə getmək üçün, sizin ortalama sürətiniz 75 km saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı 12 litr, ortalama yanacaq sərfiyyatı isə 9 l/100 km olacaq" tipli string qaytarmalıdır. 


function hesablaYanacaqMiqdari(mesafe, zaman) {
    // Ortalama sürəti hesablaq: D = V * t (mesafe = sürət * zaman, V = sürət)
    const ortalamaSuret = mesafe / (zaman ); // sürəti km/saat cinsində hesablaq
    
    // Yanacaq sərfiyyatını hesablaq əsasən ortalama sürətə görə
    let yanacaqSərfiyyatı = 0;
    
    if (ortalamaSuret >= 0 && ortalamaSuret < 60) {
      yanacaqSərfiyyatı = 6; // 0-60 km/s arası, 100 km-ə 6 litr yanacaq sərf edir
    } else if (ortalamaSuret >= 60 && ortalamaSuret < 90) {
      yanacaqSərfiyyatı = 9; // 60-90 km/s arası, 100 km-ə 9 litr yanacaq sərf edir
    } else if (ortalamaSuret >= 90 && ortalamaSuret < 120) {
      yanacaqSərfiyyatı = 8; // 90-120 km/s arası, 100 km-ə 8 litr yanacaq sərf edir
    } else {
      yanacaqSərfiyyatı = 10; // 120 km/s-dan çox, 100 km-ə 10 litr yanacaq sərf edir
    }
    
    // Yanacaq miqdarını hesabla: yanacaqSərfiyyatı * mesafe / 100:
    const yanacaqMiqdari = (yanacaqSərfiyyatı * mesafe) / 100;
    
    // Çıxış mesajı:
    const suretMesaji = `${mesafe} km yolu ${zaman} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${ortalamaSuret.toFixed(2)} km saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı ${yanacaqMiqdari.toFixed(2)} litr, ortalama yanacaq sərfiyyatı isə ${yanacaqSərfiyyatı} l/100 km olacaq.`;
    
    return suretMesaji;
  }
  
  // misal:
  const mesafe = 90; // Yolun uzunluğu (km)
  const zaman = 2; // Süre (saat)
  
  const cixisMesaji = hesablaYanacaqMiqdari(90, 2);
  console.log(hesablaYanacaqMiqdari(90, 2));
  