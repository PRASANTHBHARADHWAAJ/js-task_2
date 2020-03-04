GRADE FINDER

let a=prompt("enter val")
function gradeFinder(a)
{
  if(a<40)
  {
console.log("fail");
  }
  if(a>=40 && a<60)
  {
console.log("Better");
  }
  if(a>=60)
  {
console.log("Good");
  }

}

let df=gradeFinder(a);
console.log(df);


PRIME NUMBER

//  let c=prompt("enter string")

let flag=0;
function isPrime(c)
{
  for (i = 2; i <= c / 2; i++) {
        if (c % i == 0) {
            flag = 1;
            break;
        }
    }
    if (c == 1) {
        console.log("1 is neither prime nor composite.");
    }
    else {
        if (flag == 0)
            console.log(`${c} is a prime number`);
        else
            console.log(`${c} is not a prime number`);
    }
}
let e=isPrime(c);
console.log(e);


VOWELS

let v = prompt("enter string")
const arr1=['a','e','i','o','u'];
function isVowel(v)
{
  let ans = arr1.includes(v);
  return ans ? 'vowel' :'not a vowel';
}

let hg= isVowel(v)
console.log(hg);










let b=prompt("enter string")

let flag1=0;
arr1=['a','e','i','o','u'];
function isVowel(b)
{
  if (b = arr1.forEach((val) =>{
    flag1=1;
  }))
  (flag1==1)?console.log("vowel"):console.log("not a vowel");
}   
let d=isVowel(b);
console.log(d);

