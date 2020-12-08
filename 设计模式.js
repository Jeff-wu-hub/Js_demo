// 1.工厂模式
/*
* 1、创建函数
* 2、函数里面创建对象
* 3、返回这个新建得对象*/
function factor(name,age,sex) {
    let obj = new Object()
    obj.name = name
    obj.age = age
    obj.sex = sex
    return obj
}
const a = new factor('jack','20','man')
const b = new factor('lily','19','woman')

//2.单例模式
/*
* 目的：只创建一个对象实例
* 原理：如果没有新建得对象，则创建一个对象以原型方式继承
*       如果有新建得对象，则以之前创建的对象继承到新的实例*/
let only = (function () {
    let obj = null
    function add(info) {
        this.info =info
    }
    return function (info) {
        if(!obj){
            obj = new add(info)
        }
        return obj
    }
    return obj
})()
const d = new only('test')
const e = new only('test1')

// 策略模式
/*
* 定义一系列算法，并且把算法封装起来
* 核心内容：基于策略由两种组成   1、策略封装算法
*                           2、环境类，保存数据内存*/
const map ={ // 权重
    A:10,
    B:5,
    C:10,
    D:20
}
const strange = { // 策略
    base : 80,
    A:function () {
        return this.base + map['A']
    },
    B:function () {
        return this.base
    },
    C:function () {
        return this.base - map['C']
    },
    D:function () {
        return this.base - map['D']
    }
}
function getGrade(level) { // 获得方法
    return strange[level] ? strange[level]() : 0
}
console.log(getGrade('C'))