interface printLabelParams {
    num: string;
    age?: number;
}

function printLabel(a: printLabelParams) {
    console.log(a.age)
}
let obj = {
    num: '1',
    name: '2',
    age2: '4'
}
printLabel(obj)

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
    z: string;
}

let p1: Point = {
    x: 1,
    y: 2,
    z: '3'
}
p1.z = '5'



interface SquareConfig {
    color?: string;
    width: number;
    // [propName: string]: any;
}

function createSquare(config: SquareConfig){
    // ...
}
//  对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。 
//  如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
let mySquare = createSquare({  width: 100, x: 3 } as SquareConfig);


// [propName: string]: any;

// 它就是将这个对象赋值给一个另一个变量： 因为squareOptions不会经过额外属性检查，所以编译器不会报错