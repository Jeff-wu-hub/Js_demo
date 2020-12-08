a = function () {
    console.log(this.name)
}
const aa = new Object()
aa.name = 'world'

a.call(aa)
