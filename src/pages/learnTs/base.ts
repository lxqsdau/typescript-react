let num: number = 4;
let str: string = '34';
str = '67';
let str3: string = `2${str}`;

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2];
console.log(arr2)

let x: [number, string] = [1, '2'];
console.log(x[1].slice())
// x[2] = true;
console.log(x)

// 枚举
enum Color {
    Red = 1,
    Green = 4,
    Black = 3
}
console.log(Color[3]) // Black
let c: Color = Color.Red // 1
console.log(c) // 1

// 任意值
let one: any = 0;
one = '233';
let list: any[] = [1, '3']

// 空值
function fn(): void {
}

// 类型断言
let asert: string = '3';
let strLength: number = (asert as string).length; // react语法中必须使用这种
console.log(strLength, 'strLength');


