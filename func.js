// const arr = ['hu','hi','ht'];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }
// arr.forEach((element,i) => {
//     //console.log(element,i);
//     arr[i] = element + 'ok';

// })
// console.log(arr);
// const newArr = arr.map((ele,i) =>{
//     return ele+'ok'
// })
//const newArr = arr.map(ele => ele + "ok");

// console.log(newArr)

const user = [
    {
        name : 'steve',
        age :2,
    },
    {
        name : 'steve1',
        age :2,
    },
    {
        name : 'steve2',
        age :3,
    },
]
// console.log(user);
// const filteredUser = user.filter(user => user.name==='steve');
// console.log(filteredUser);

// let num = 0;
// user.forEach(user =>{
//     num += user.age;
// });

// const num = user.reduce((acc,cur)=>{
//     return acc += cur.age;
// },0)

const num = user.reduce((acc, cur) => acc + cur.age, 0);
console.log(num);
