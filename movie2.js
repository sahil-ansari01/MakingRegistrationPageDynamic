console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
        const promiseWifeBringingTicket = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('ticket');
        }, 3000)
    });

    const getPopcorn =  new Promise( (resolve, reject) => resolve(`popcorn`));
    const getButter = new Promise( (resolve, reject) => resolve(`butter`));
    const getColdDrink = new Promise ( (resolve, reject) => resolve(`cold drink`))

    let ticket = await promiseWifeBringingTicket;

    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: I am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: I got some ${butter} on popcorn`);
    console.log(`husband: anything else darling?`);
    console.log('wife: I need cold drink as well');

    let coldDrink = await getColdDrink;

    console.log('husband: here is your cold drink');
    console.log('husband: anything else darling?');
    console.log(`wife: let go we are getting late`);
    console.log(`husband: thank you for reminder`);
    
    return ticket;  
}

preMovie().then( (m) => console.log( `person3: shows ${m}`))
console.log('person4: shows ticket');
console.log('person5: shows ticket');