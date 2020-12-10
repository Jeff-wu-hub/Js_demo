// 原型链继承
sub = function () {
}
sub.prototype.good = '1'

const text = new sub()
text.good = 2
console.log('text1.good = '+text.good) // 在原型链上找

const text2 = new sub()
console.log('text2.good = '+text2.good)// 在本身找

// 构造函数继承

sub2 = function (e) {
    this.name = e
}
const text3 = new sub2('text3 = '+'hello world')
console.log(text3.name)

// 原生继承
const sub3 = new Object()
sub3.name = 'text'
const text4 = sub3
console.log(text4.name)
