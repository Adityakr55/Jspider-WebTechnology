// main();
// function main()
// {
//   console.log(noOfdigits(8742,0));
//   console.log(sumOfdigits(84394,0));
//   console.log(sumOfevenDigits(23368374,0));
//   console.log(sumOfevenDigits1(23368374,0));
//   console.log(sumOfevenDigits2(23368374,0));
//   console.log(fact(5));
//  console.log(isStrong(145,0,145));
//}
// function noOfdigits(n,count)
// {
//   if(n==0) return count;
//   return noOfdigits(Math.trunc(n/10),count+1);
// }

// function sumOfdigits(n,sum)
// {
//   if(n==0) return sum;
//   return sumOfdigits(Math.trunc(n/10),sum+=n%10);
// }

// function sumOfevenDigits(n)
// {
//     let sum = 0;
//     if(n==0) return sum;
//     if((n%10)%2==0){
//         sum +=n%10;
//     }
//     return sum + sumOfevenDigits(Math.trunc(n/10));
// }

// function sumOfevenDigits1(n,sum)
// {
//     if(n==0) return sum;
//     if((n%10)%2==0){
//         sum +=n%10;
//     }
//     return sumOfevenDigits1(Math.trunc(n/10),sum);
// }

// function sumOfevenDigits2(n)
// {
//     if(n==0) return n;
//     if((n%10)%2==0){
//         return n%10 + sumOfevenDigits2(Math.trunc(n/10));
//     }
//     else{
//         return sumOfevenDigits2(Math.trunc(n/10));
//     }
    
// }
const read = require('readline-sync');
main();
function main()
{
   

    // Ask user for a number
    let num = read.question("Enter a number: ");
   
    if(isStrong(num,0,num))
    {
        console.log(num+" is a strong number.")
    }
    else
    {
        console.log(num+" is not a strong number.")
    }
}

function fact(n)
{
    if(n == 0) return 1;
    return n*fact(n-1);
}

function isStrong(n,sum,num)
{
    if(n==0) return sum == num;
    sum += fact(n%10)
    return isStrong(Math.trunc(n/10),sum,num);
}