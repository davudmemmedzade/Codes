// let i = 1
// while (i <= 10) {
//     let j = 1
//     while (j <= 10) {
//         console.log(i + '*' + j + '=' + i * j);
//         j++

//     }
//     i++
// console.log('---------------');


// }
// let cem=0
// let i=1
// let say=1
// do {
//     if(Math.trunc(i%1000/10)==11){
// console.log(i)
// cem=cem+i
// say++

//     }
//     i++

// } while (i<=10000);
// console.log(cem);
// console.log(say);
// let a = +prompt('aylar')

// switch (a) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('qis');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('yaz');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('yay');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('payiz');
//         break;
//         default:
//             console.log('melumat yanlisdir');

// }

// let y = 1
// while (y) {
//     console.log("Secim edin (1 - 6): \n1.Toplama\n2.Cixma\n3.Vurma\n4.Bolme\n5.Qaliq\n6.Stop\nSecim: ");
//     let x = +prompt('secim edin; ')
//     switch (x) {
//         case 1:
//             a = +prompt('reqem daxil edin')
//             b = +prompt('reqem daxil edin')
//             console.log('netice:' + (a + b));
//             break

//         case 2:
//              a = +prompt('reqem daxil edin')
//              b = +prompt('reqem daxil edin')
//             console.log('netice:' + (a - b));
//             break

//         case 3:
//              a = +prompt('reqem daxil edin')
//              b = +prompt('reqem daxil edin')
//             console.log('netice:' + (a * b));
//             break

//         case 4:
//              a = +prompt('reqem daxil edin')
//              b = +prompt('reqem daxil edin')
//             console.log('netice:' + (a / b));
//             break

//         case 5:
//              a = +prompt('reqem daxil edin')
//              b = +prompt('reqem daxil edin')
//             console.log('netice:' + (a % b));
//             break

//         case 6:
//             y = 0
//             console.log('netice:' + 'stop');
//             break

//         default:
//             console.log('melumat yanlis daxil edilib');
//     }
// }
// let a=1
// do {
//     console.log(a%10);
// a++
    
    
// } while (a<=100);

// let n=3
// let i=1
// do {
//     if(i==n){
//         i++
//         continue
//     }
//     console.log();
//     i++
// } while (i<=100);
let a=''
let i=1
do {
    let j=1
do {
    j++
    a=a+'* '

    
} while (j<i);
a=a+'\n'
i++
    
} while (i<10);
console.log(a);
