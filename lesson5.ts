interface IPet {
    name: string;
    age: number;
}

type ReadonlyPet = {
    // mapped type modifiers(make it easy to apply bulk prop changes) to make all properties readonly
    // will be like IPet but readonly props
    readonly [key in keyof IPet]: IPet[key];
}

const pet:IPet = {
    age: 12,
    name: 'Jack'
}

const readonlyPet:ReadonlyPet = {
    age: 12,
    name: 'Jack'
}

pet.age = 5;
// readonlyPet.name = 'Mike' does not compile, because readonly

// readonly is not the only thing that can be changed
type OptionalPet = {
    // will be like IPet but optional props
    [key in keyof IPet]?: IPet[key];
}
// string
type StringsPet = {
    // will be like IPet but string props
    [key in keyof IPet]: string;
}
// remove optional prop modifiers if any
type NoOptionalPet = {
    // will be like IPet with all props as required
    [key in keyof IPet]-?: IPet[key];
}
// + sign can also be used to make it clear
type AllOptionalPet = {
    // note +
    [key in keyof IPet]+?: IPet[key];
}