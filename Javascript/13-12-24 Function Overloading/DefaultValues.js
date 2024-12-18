main();
function main() {
   let res = add();
   console.log('res = ' + res);
    res = add(1,2);
    console.log('res = ' + res);
}
function add(a = 0, b = 0) {
    return a + b;
    
}