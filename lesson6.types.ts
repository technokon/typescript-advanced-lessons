// type aliases use to alias a complex type to a reusable names
// or a union
export type Pet = IDog | ICat;
// interfaces are used to define shape contract for object
export interface IAnimal {
    age: number;
    eat(): void;
    speak(): void;
}

export type TAnimal = {
    age: number;
    eat(): void;
    speak(): void;
}

export type Test = {
    [prop in keyof IAnimal]: IAnimal[prop]
}

export interface IDog {
    walk(): void;
    crawl(): void;
}

export interface ICat {
    bark():void;
    obey():void;
}

// we can have complex types for functions or variables
type Eat = (food: string) => void;
type SpecialArray = [string, number, Function];
// equivalent interfaces
interface IEat {
    (food: string): void
}
