// main();
// function main()
// {
//     add(1,2);
//     add(1,"jsp");
//     add(2.2,3.05);
// }

// function add(...arr)
// {
//     console.log('arr = ' + arr);
// }

main1();

function main1()
{
    add1(1,2,3,4,5);
    add1(1,"jsp");
    add1(2.2,3.05,7.05);
}

function add1(a,b,...arr)
{
    console.log("arr="+arr);
    let sum = a + b;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    console.log('sum = ' + sum);
}