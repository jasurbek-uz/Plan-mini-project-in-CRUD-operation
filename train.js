// D task
// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

function twostring(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(twostring("mitgroup", "gmtiprou")); 






















// c Task
//shunday class tuzing nomi Shop bolsin va uni constructoriga 3 hil mahsulotga pass bolsin hamda classning 3ta methodi bolsin
// biri qoldiq biri sotih va biri bepul har bir method ishga tushsin log qilsin 
// masalan const shop=new shop (4.5.2);
// shop qoldiq return 20:40da 4ta non 5ta lagmon 2ta cola shop.sotish("non",3) shop qabul("cola,4") shop qoldiq() return hzori 20;50 1ta non 5ta lagmon 6ta cola
 
// const moment = require("moment");
// class Shop {
//     constructor(non, lagmon, cola) {
//         this.mahsulotlar = {
//             non: non,
//             lagmon: lagmon,
//             cola: cola
//         };
//     }

//     hozirgiVaqt() {
//         const hozir = new Date();
//         const soat = hozir.getHours();
//         const daqiqa = hozir.getMinutes();
//         return `${soat < 10 ? '0' : ''}${soat}:${daqiqa < 10 ? '0' : ''}${daqiqa}`;
//     }

//     log(xabar) {
//         console.log(`Hozir ${this.hozirgiVaqt()} - ${xabar}`);
//     }

//     qoldiq() {
//         const xabar = `${this.mahsulotlar.non} ta non, ${this.mahsulotlar.lagmon} ta lagmon va ${this.mahsulotlar.cola} ta cola mavjud!`;
//         this.log(xabar);
//         return xabar;
//     }

//     sotish(mahsulot, miqdor) {
//         if (this.mahsulotlar[mahsulot] >= miqdor) {
//             this.mahsulotlar[mahsulot] -= miqdor;
//             this.log(`${miqdor} ta ${mahsulot} sotildi.`);
//         } else {
//             this.log(`${mahsulot} yetarli emas!`);
//         }
//     }

//     qabul(mahsulot, miqdor) {
//         this.mahsulotlar[mahsulot] += miqdor;
//         this.log(`${miqdor} ta ${mahsulot} qabul qilindi.`);
//     }
// }
// const shop = new Shop(4,5,2);
// shop.sotish('non', 3); 
// shop.qabul('cola', 4); 
// console.log(shop.qoldiq());

// B task 
 // Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin
// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yoqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi
// console.log("");
// const countDigits_1 = (text) => {
// 	return text.split("").filter((txt) => /[0-9]/.test(txt)).length;
// };

//TASK A
// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

// function countLetter(letter, word) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     // console.log(letter, "is repeated in the word", word, count, "times...");
//     return count;
// }

// console.log(countLetter("e", "engineer")); 

// console.log("Jack Ma maslahatlari"); 
// const list = [
//     "yahshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30 
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60 
//     "endi dam oling, foydasi yoq endi", // 60
// ];

// this is Callback function
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null); 
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a < 30) callback(null, list[1]); 
//     else if (a > 30 && a <= 40) callback(null, list [2]); 
//     else if (a > 40 && a <= 50) callback(null, list [3]); 
//     else if (a > 50 && a <=60) callback(null, list[4]);
    // setting timeout is for example,
//     else {
//         setTimeout(() => {
//             callback(null, list[5]);
//         }, 5000);
        
//     }
// }

// maslahatBering(20, (err, data) => { 
//     if (err) console.log("ERROR: ", err); 
//     console.log("javob: ", data);
// });


// string parameter
// maslahatBering("salom", (err, data) => { 
//         if (err) console.log("ERROR: ", err); 
//         else {
//             console.log("javob: ", data);
//         }
//     });

// console.log("pass here 0");
// maslahatBering(65, (err, data) => { 
//     if (err) console.log("ERROR: ", err); 
//     else {
//         console.log("javob: ", data);
//     }
// });
// console.log("pass here 1");




//  a Asynchronous function
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number"); 
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a < 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3]; 
//     else if (a > 50 && a <=60) return list[4];
//     else {
  

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         })
//     }
// }

// then, catch
// console.log("pass here 0");
// maslahatBering(20)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR: ", err);
//     });
//     console.log("pass here 1");


// asynch/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();



