// let data = {
//     "Alice": 25, 
//     "Bob": 22, 
//     "James": 15, 
//     "Jenifer": 29,
//     "Sarah": 30, 
//     "Lukah": 18, 
//     "Steve": 41
// };
// console.log(data);
// Object.keys(data).map((x)=>{
//     console.log(x,x.length);
// })


// // console.log(data);
// Object.values(data).map((x)=>{
//     console.log(x);
// })

//     Object.keys(data).map((x)=>{
// if(x.includes('a')){

//     console.log(x);
// }

//     })
    
// console.log(Object.values(data).reduce((x,y)=>x+y,0));



// let library  = [
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         pages: 320,
//         price: 25.99,
//         readStatus: true,
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         pages: 600,
//         price: 34.99,
//         readStatus: true,
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         pages: 400,
//         price: 19.99,
//         readStatus: false,
//     }
// ];
// console.log(library.pages);

let  max=100
let min=0
let b=(Math.trunc(Math.random()*(max - min + 1) + min));

let a=prompt('eded daxil edin')
if(a<b){
    console.log('yuxari');
}
else if(a>b){
    console.log(asagi);
}
else if(a==b){
    console.log('eded tapildi');

}
