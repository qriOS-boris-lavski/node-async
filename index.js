let interval = setInterval(() => { console.log('(7)'); clearInterval(interval)});

setImmediate(() => console.log('(3)'));

setTimeout(() => console.log('(4)'));

process.nextTick(() => console.log('(2)'));

console.log('(1)');

let myPromise = () => new Promise((resolve) => setTimeout(() => { console.log('(8)'); resolve()}));

let myPromise2 = () => new Promise((resolve) => { console.log('(5)'); resolve()} );

myPromise().then(console.log('(9)'));

myPromise2().then(console.log('(6)'));