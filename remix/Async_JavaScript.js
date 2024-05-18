console.log("Async_JS");

/*
 * async vs sync:->
 * async: doing many tasks together
 * sync: doing tasks one by one other will start after current is completed
*/

/*
 * example:
 * task a = 5
 * task b = 2
 * task c = 15
 * task d = 1 
 * 
 * in sync total time taken to compelete task -> 23
 * in Async -> 15
*/

// sync and Async syntax diff.
/*
 * code Syntax contains ->
 * setTimeout, setInterval, promises, fetch, axios, XMLHttpRequest 
 * then Async code.
 * otherwise sync code. 
*/

//what is Async JS?
/*
 * What is Async JS?
 * for example i am coding on my laptop on different server
 * and i have to fetch some data through api calling from 
 * different server and do not know how much time it will
 * take so here we write Async code to get the answer when
 * it will get ready and run the remaining command when
 * data is fetched.
 * Conclusion : Async is used when we don't know how much
 * time our code will take to run.
 * 
*/
// setTimeout(callback, time);
//the async code will be kept aside and other sync code will run
// setTimeout(()=>{

// },2000);

/**
 * JS is not async.
 * there are two stacks main stack & side stack
 * main-stack -> output 
 * side-stack -> for running code
 * e.g 
 * a->sync.
 * b->sync.
 * c->async.
 * d->sync.
 * main-stack -> a,b,d
 * side-stack -> c
 * main-stack -> a,b,d,c (after c is done)
*/
// how do boh stack communicate with each other - event loop
//event loop -> brings output from side to main stack.

// console.log("h1");
// console.log("h2");
// setTimeout(()=>{
//   console.log("h3");
// },0);
// console.log("h4");
// all h1, h2, h4 -> goes to main stack
// h3-> goes to side stack
// after completetion of main stack it goes to side stack 
// check whether task is completed or not.
// therefore output -> h1, h2, h4, h3
/*
 * JavaScript is single threaded
 * means -> if we have two task a and b then it will
 * do one part of A and switches to B and vica-versa
 * that means it can only do one task at a time
 * then how we do async tasks?
*/

/*
 * CALLBACKS ->
 * callback is a function, works on async code completetion.
 * PROMISES -> fetch axios xmlRequest
*/
// let ans = new Promise((res,rej)=>{
//   if(true){
//     return res();
//   }else{
//     return rej();
//   }
// })

// ans
// .then(()=>{
//   console.log("true");
// })
// .catch(()=>{
//   console.log("false");
// })

// var ans = new Promise((res,rej)=>{
//   let num = Math.floor(Math.random()*10);
//   if(num<5){
//     return res();
//   }else{
//     rej();
//   }
// })
// ans
// .then(()=>{
//   console.log("below");
// })
// .catch(()=>{
//   console.log("above");
// })

// var ans = new Promise((res,rej)=>{
//   return res("sabse pphele ghar par aao");
// });
// var ans2 = ans.then((data)=>{
//   console.log(data);
//   return new Promise((res,rej)=>{
//     return res("gate open nd close");
//   });
// });
// var ans3 = ans2.then((data)=>{
//   console.log(data);
//   return new Promise((res,rej)=>{
//     return res("khana khao");
//   });
// });
// ans3.then((data)=>{
//   console.log(data);
// });


/**async and await */

/*
 * koi bhi async func. ko short karne ke liye 
 * we have to write promises so to write promises we 
 * have to write then to avoid writing then we use
 * async & await
*/
//syntax->
//simple code using promises;
// function abcd(){
//   fetch(`https://randomuser.me/api/`)
//   .then((raw)=> {
//     return raw.json();
//   })
//   .then((data)=>{
//     console.log(data);
//   });
// }
// abcd();
// //with async and await
// async function abcd(){
//   let raw = await fetch(`https://randomuser.me/api/`);
//   let ans = await raw.json();
//   console.log(ans);
// }
// abcd();

/*
 * when we have to get the data from the third party 
 * then we have to use async & await; 
 * ----------------------------------
 * concurrency => js mein sync code and async code
 * ek saath process ho raha tha ye hai concurrency.
 * parallelism => focus jaada karta hai different 
 * processors and unke cores par kaam ko chalaane par
 * throttling => kisi code ko control karna number of
 * executions.
*/