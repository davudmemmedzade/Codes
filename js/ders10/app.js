// let a= [454, 235, 68, 456, 764, 97, 32, 4, 56, 6, 76]
// console.log(a[1],a[a.length-1]);

// for (let i = 0; i < a.length; i++) {
//     if(a[i]%2==0){
//         console.log(a[i]);   
//     }
// }
// let say=0
// for (let i = 0; i < a.length; i++) {
//     if(a[i]%10==4){
//         console.log(a[i]);  
//         say=say+1 
//     }
// }
// console.log(say);

// for (let i = 0; i < 3; i++) {
//     console.log(a[i]);
// }

// for (let i = 0; i < a.length; i++) {
// console.log(a[i]%10);  
// }
// ---------------------------------------------------
// let a= [454, 235, 68, 456, 764, 97, 32, 4, 56, 6, 76]
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]*a[i]);
// }

// let cem=0
// let a = [43, 45, 65, "hello", true, 54.34, "computer"]
// for (let i = 0; i < a.length; i++) {
// if(typeof(a[i])=='number'){
//     cem=cem+a[i]
// }
// }
// console.log('CEM ;',cem);


// for (let i = 0; i < a.length; i++) {
//     if(typeof(a[i])=='string'){
//         console.log(a[i]);
//     }
// }

// let a=['salam','neecsen','string','neynirsen']
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i][0]);
// }

// let a = [43, 45, 65, "hello", true, 54.34, "computer"]
// for (let i = 0; i < a.length; i++) {
// if(typeof(a[i])=='string'){
//     console.log(a[i].toUpperCase());

// }    
// }


// let a= [454, 235, 68, 456, 764, 97, 32, 4, 56, 6, 76]
// let x=+prompt()
// a.push(x)
// a.unshift(x)
// console.log(a);

let cem=0
let a= [454, 235, 68, 456, 764, 97, 32, 4, 56, 6, 76]
for (let i = 0; i < a.length; i++) {
    
cem=cem+a[i]    
}
console.log(cem/a.length);
let ortalama=cem/a.length

for (let i = 0; i < a.length; i++) {
    if(a[i]>ortalama){
        console.log(a[i]);
    }
}

















