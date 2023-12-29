console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicket = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('ticket');
    }, 3000)
});

const getPopcorn = promiseWifeBringingTicket.then( (t) => {
    console.log('wife: I have the ticket');
    console.log('husband: we should go in');
    console.log('wife: I am hungry');
    return new Promise( (resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then( (t) => {
    console.log('husband: I got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise( (resolve, reject) => resolve(`${t} butter`));
});

const getColdDrink = getButter().then( (t) => {
    console.log(`husband: I got some ${butter} on popcorn`);
    console.log(`husband: anything else darling?`);
    console.log('wife: I need cold drink as well');
    return new Promise( (resolve, reject) => {
        resolve(`${t} coke`); 
    })
});

console.log('person4: shows ticket');
console.log('person5: shows ticket');