// using & intersection type operator
interface IPet {
    pose(): void
}
interface IFeline {
    nightVision: boolean
}
interface ICat extends IPet, IFeline {

}
// or concise
type TCat = IPet & IFeline
let x: ICat;
let y: TCat;
// type aliases and interfaces can be used interchangeably
interface wolverine extends TCat, IFeline {
    claws: boolean
}
let w: wolverine;

type dog = wolverine | IFeline;
let f: dog;

type yes = true

// class can implement both
class Me implements TCat, wolverine {
    age: number = 0;
    claws: boolean = true;
    name: string = 'Emil';
    nightVision: yes = true;

    pose(): void {
    }
}
// one thing a class or interface cannot implement is a union type
//class Cat implements dog { }
// another difference is once can have 2 interfaces
// and they will be merged together
interface match {
    fire: true
}
interface match {
    color: string
}
let m: match;



