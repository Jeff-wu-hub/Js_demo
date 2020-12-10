let a = 100;
function test(){
    console.log(a)
    a = 10;  //去掉了var 就变成定义了全局变量了
    console.log(a)
}
test();
console.log(a)