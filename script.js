// console.log('person1: shows ticket');
// console.log('person2: shows ticket');


// const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
//     return setTimeout(() => {
//         resolve('ticket');
//     }, 3000);
// });


// const getPopcorn = promiseWifeBringingTicket.then((t)=>{
//     console.log('wife: i have the ticket.')
//     console.log(`husband: we should go in`);
//     console.log(`wife: no i am hungry`);
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
// });

// const getButter = getPopcorn.then((t)=>{
//     console.log('husbend: i got some popcorn');
//     console.log('husbend: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve,reject) => resolve(`${t} butter`));
// });

// getButter.then((t) => console.log(t));

// console.log('person4: shows ticket');
// console.log('oerson5: shws ticket');

//====================================================

//as per YouTuber:

//====================================================

console.log('person1: shows ticket');
console.log('person2: shows ticket');


const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('ticket',3000));
    });

    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));

    const getButter=new Promise((resolve,reject)=>resolve(`butter`));

    const getColdDrinks=new Promise((resolve,reject)=>resolve(`ColdDrink`));

    // let ticket = await promiseWifeBringingTicket;

    let [ticket,popcorn,butter]= await Promise.all([promiseWifeBringingTicket,getPopcorn,getButter]);

    console.log(`wife: i have the ${ticket}`);
    console.log(`husband: we should go in`);
    console.log(`wife: no i am hungry`);

    // let popcorn=await getPopcorn;

    console.log(`husbend: i got some ${popcorn}`);
    console.log(`husbend: we should go in`);
    console.log(`wife: i need butter on my ${popcorn}`);

    // let butter=await getButter;
    
    console.log(`husbend: i got some ${butter} on my ${popcorn}`);
    console.log(`husbend: anything else darling`);
    console.log(`wife: let's go we are getting late`);
    console.log(`husbend: thank you for the reminder *grins*`);
    console.log(`wife: wait wait i need ColdDrink please`);

    let ColdDrink=await getColdDrinks;

    console.log(`husbend: i got some ${ColdDrink} and all stuff`);
    console.log(`husbend: we are almost lated`);
    console.log(`wife: So, why we are waiting for, let's go`);

    return ticket;
};

preMovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('oerson5: shws ticket');

//=================================================
//Convert the createPost , deletePost you wrote previously into async await completely.
//=================================================
const posts = [
    {title : 'Post 1',body : 'This is post One.',createdAt : new Date().getTime()},
    {title : 'Post 2',body : 'This is post Two.',createdAt : new Date().getTime()}
];

let intervalId = 0;

function getPosts(){
    clearInterval(intervalId);
    intervalId =  setInterval(() => {
        let output = '';
        posts.forEach((post)=>{
            let createdDate = new Date(post.createdAt);
            output+=`<li>${post.title} ----- Created At: ${createdDate.getHours()}:${createdDate.getMinutes()}:${createdDate.getSeconds()} ----- Last updated: ${Math.trunc((new Date().getTime() - post.createdAt)/1000)} seconds ago ----- Last Activity: ${post.lastActivityTime}</li>`;
        });
        document.body.innerHTML = output;   
    },1000);
}


function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push({...post,createdAt : new Date().getTime()});
            // console.log(posts);
            updateLstActivityTime();
            const error = false;
            if(!error){
                resolve();
            }else{
                reject(`Error: Something went wrong.`);
            }
        },1000);
    });
}


function updateLstActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.forEach((post)=>{
                post.lastActivityTime=new Date().toLocaleDateString();
                resolve();
            })
        }, 1000);
    })
}

function deletePost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(posts.length>0){
                resolve(posts.pop());
            }else{
                reject(`Array is empty.`);
            }
        },5000);
    });
}

getPosts();

const displayPost=async () =>{

    let post3=createPost({title : 'Post 3',body : 'This is post Three'});
    let post4=createPost({title : 'Post 4',body : 'This is post Four'});

    await post3;
    await post4;
    await deletePost();

    return getPosts();
}

displayPost();

//================================
//async/await
// let p1=function (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Buying a playstation');
//             resolve();
//         }, 2000);
        
//     }) 
// }

// let p2 = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Buying a ps4');
//             resolve('successfull');
//         }, 500);
        
//     })
// }

// let p3 = () => {
//     return new Promise ((resolve,reject)=>{
//         console.log('playing');
//         resolve();
//     })
// }

// let riding= async ()=> {
//     await p1();
//     // console.log(p1());
//     await p2();
//     // console.log(p2())
//     await p3();

//     return;
// }
// riding();



//====================================

//Why are async await better than promise.then

// function poem1(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Early to bed and early to rise,')
//         }, 1000);
//         resolve();
//     })
// }

// function poem2(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Makes a man healthy, wealthy and wise.')
//         }, 1000);
//         resolve();
//     })
// }
// //promise.then:

// poem1().then(()=>{ return poem2()});

// //async and await:

// async function poem(){
//     await poem1();
//     await poem2();

// }

// poem();



//======================================================


// //Manali trip:
// function plan(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Planning a trip for Manali.');
//         }, 4000);
//     })
// }
// function booking(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Going to Manali.');
//         }, 1000);
//     })
// }
// function manaliArrived(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Reached Manali.');
//         }, 1000);
//     })
// }
// function travelling(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Travelling in Manali.');
//         }, 1000);
//     })
// }
// function backToHome(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Back to Home from Manali.');
//         }, 1000);
//     })
// }
// async function tripToManali(){
//     const promise1=await plan();
//     console.log(promise1);
//     const promise2=await booking();
//     console.log(promise2);
//     const promise3=await manaliArrived();
//     console.log(promise3);
//     const promise4=await travelling();
//     console.log(promise4);
//     const promise5=await backToHome();
//     console.log(promise5);
//     return ;
// }

// tripToManali();




// console.log('Booking a car.');
// console.log('Going to Manali.');
// console.log('Reached Manali.');
// console.log('Travelling in Manali.');
// console.log('Back to Home from Manali.');


