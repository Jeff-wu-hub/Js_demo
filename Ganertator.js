function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
const a = foo(1)
console.log(a)