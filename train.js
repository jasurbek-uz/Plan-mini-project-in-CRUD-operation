// A task
// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing
// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

function countLetter(letter, word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    // console.log(letter, "is repeated in the word", word, count, "times...");
    return count;
}

console.log(countLetter("e", "engineer"));




// event loop va callback

console.log("Jack ma maslahatlari");
const list =[
    "yaxshi talaba noling", //0-20
    "togri bsohliq tanglang va koproq xato qiling", //20-30
    "ozingizga ishlashni boshlang", // 30-40
    "sizni   kuchli qiladigan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling" //50-60
    "endi dam oling, foydasi yoq" //60
]; 
function maslahatBering (a, callback) {
    if (typeof a !== "number") callback ("insert a number", null)
    else if (a<=20) callback (null, list[0]);
    else if (a >= 20 && a <= 30) callback(null,list[1]);
    else if (a >= 30 && a <= 40) callback(null, list[2]);
    else if (a >= 40 && a <= 50) callback(null, list[3]);
    else if (a >= 50 && a <= 60) callback(null, list[4]);
    else {
        // callback(null, list[5]);
        setTimeout(function(){
            callback list[5];
        }, 5000);
    }
}

console.log("passed here 0");
maslahatBering(25,(err, data) =>{
    if (err) console.log("ERROR:", err);
    console.log("javob:", data);
});

// async function  

// async function  maslahatBering (a, ) {
//     if (typeof a !== "number") throw new Error("insert a number", null);
//     else if (a<=20) return  list[0];
//     else if (a >= 20 && a <= 30) returnlist[1];
//     else if (a >= 30 && a <= 40) returnlist[2];
//     else if (a >= 40 && a <= 50) returnlist[3];
//     else if (a >= 50 && a <= 60) returnlist[4];
//     else {
//         return list[5];
//         setTimeout(function(){
//             return list[5];
//         }, 5000);
//     }
// }
// promisega misol
    // return new Promise ((resolve, reject) => {
    //     setTInterval (() => {
    //         return (list[5]);
    //     }, 1000);
    // });

    console.log("passed here 0");
maslahatBering(25,(err, data) =>{
    if (err) console.log("ERROR:", err);
    console.log("javob:", data);
});
// // then va catch
// console.log("passed here 0");
// maslahatBering(25)
// .then((data) =>{
//     maslahatBering(30)
//     .then((data) =>{
//         maslahatBering(20)
//     })
//     ,then((data) =>{
//         maslahatBering(40)
//     })
//     .then((data) =>{
//         console.log("javob:",data);
//     })
// .catch(err) =>{
//     console.log("ERROR:",err);
// })
// console.log ("passed here 1");


// // async va await
// async function run(){
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
// }
// run();