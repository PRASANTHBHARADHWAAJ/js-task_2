// let a=prompt("enter val")
// function gradeFinder(a)
// {
//   if(a<40)
//   {
// console.log("fail");
//   }
//   if(a>=40 && a<60)
//   {
// console.log("Better");
//   }
//   if(a>=60)
//   {
// console.log("Good");
//   }

// }

// let b=gradeFinder(a);
// console.log(b);

// let b=prompt("enter string")


arr1=['a','e','i','o','u'];
function isVowel(b)
{
  if(b in arr1)
  {
    return b;
  }
  else{
    return ("not a vowel");
  }
}

let d=isVowel('a');
console.log(d);



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

