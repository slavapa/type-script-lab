const str: string = "Hell TS";

console.log(str);

const isFetching: boolean = false;

let int: number = 25;

const numberArray: number[] = [1,1,2,3,5,8,13]

const numberArray2: Array<number> = [1,1,2,3,5,8,13]

const contact: [string, number] = ["Slava", 12255]

let var1: any = 42

var1 = "s"

function sayName(name: string): void{
    console.log(name);
}

sayName("SlavaTS")

function throwError(error): never{
    throw new Error(error)
}

type Login = string

const lg1: Login = "sl"

type MyType1 = string | null | undefined


