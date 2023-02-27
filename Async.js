
// sync Js
const MAX = 1000;

function isPrime(n){
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n >1;

}

function random(max){
    return Math.floor(Math.random()*max);
}

function generatePrimes(range) {
    const primes = [];
    
    while (primes.length < range) {
      const randomNo = random(MAX);
      if (isPrime(randomNo)) {
        primes.push(randomNo);
      }
    }
    return primes;
  }

const getprimesAsync = (value)=>{

return new Promise((res,rej)=>{
    res(()=>generatePrimes(value))
})
}

const range = document.querySelector('#range');
const output = document.querySelector('#output');
const divprimes = document.querySelector('#primeNum');

document.querySelector('#generate').addEventListener('click', async() => {
  const primes = generatePrimes(range.value);
//  const primes = await getprimesAsync(range.value)
  output.textContent = `Finished generating ${range.value} primes!`;
  
  console.log(divprimes)
  // const primesNums = primes()
  const primesNums = primes

  primesNums.map(prime=>{
   const  html = `<a>${prime}</a>&nbsp`
    
    output.insertAdjacentHTML('afterbegin',html)
  });
});

document.querySelector('#reload').addEventListener('click', () => {
  document.location.reload();
});


// Async Js using Promises 

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
    
  });

const d = myPromise.then(d=>console.log(d))
console.log(d);




// Excercise--
// create  oddSum  using promises

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert('runs after 3 seconds'));