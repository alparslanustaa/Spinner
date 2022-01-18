const spin  = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|","\r/   ","\r-   ","\r|  , ", "\r/   ", "\r-   ", "\r\\   ", "\r|","\r/   ","\r-   "];
process.stdout.write('hello there from lighthouse labs\rHeyyy\n');
let increment = 50;
for (const i of spin) {
  setTimeout(()=>{
    process.stdout.write(i);
  },increment)
  increment +=200
}