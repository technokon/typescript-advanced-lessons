import {IAnimal, TAnimal, Test} from './lesson6.types';

const animal: IAnimal = {
    age: 0,
    eat(): void {
    },
    speak(): void {
    }
}
// we can do this because typescript compares structures (structural typing)
const typeAnimal: TAnimal = animal;
const test: Test = animal;

