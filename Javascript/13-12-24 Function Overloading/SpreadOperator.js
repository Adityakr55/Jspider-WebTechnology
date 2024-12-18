// main();
// function main()
// {
   
//     let nums = [1,2,3,4,5];
//     let maxVal = Math.max(...nums);
//     console.log('maxVal = ' + maxVal);
// }

// main1();
// function main1()
// {
//     let a = 10;
//     let b = 20;
//     let nums = [1,2,3,4,5];
//     let maxVal = Math.max(a,b,...nums);
//     console.log('maxVal = ' + maxVal);
// }

// console.log(n1);
// var n1 = 10;

// console.log(n1);

// // console.log(a); // ReferenceError: Cannot access 'a' before initialization.
// let a = 20;
// console.log(a);

// main2();

// function main2()
// {
//     console.log("main starts");
//     console.log("main ends");
// }

// // console.log(m1); // ReferenceError: Cannot access 'm1' before initialization.
// let m1 = function() {
//     console.log("m1 starts");
//     console.log("m1 ends");
// };

main();
function main()
{
   let i = 1;
    i=i++ + ++i;
    console.log(print(i));
}
function print(i)
{
    if(i>3) return i;
    console.log(i);
    print(i+1);
    print(i+1);
    print(i+1);
    console.log(++i);
}
