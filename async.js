// function asyncTask(){
//     console.log('Start');

//     //setTimeout(()=> console.log('timeout'),0);
//     sleep(2000).then(()=> console.log('end'));
    
//     //console.log('end');
// }

// const sleep = (ms) => new Promise((resolve,reject)=> {
//     setTimeout(()=>{
//         console.log('slept');
//         resolve('ok');
//     },ms);
// })

// asyncTask();



function callbackExample(data,cb){  
    cb(data);
}
callbackExample('steve',console.log);