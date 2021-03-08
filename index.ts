const halloweenCostumeIdeas = ['👽', '🏈', '⚾️', '🎾']

function randomCostume(ideas: string[]) {
    return ideas[Math.floor(Math.random() * ideas.length)]
}


randomCostume(halloweenCostumeIdeas)

interface Man {
    walk(): void;
    talk(): void;
    name: string
}

let joe: unknown = {
    name: 'Joe',
    walk: () => {},
    talk: () => {},
}

function doStuff(a: Man) {
    a.talk()
    a.walk()
}

if (joe && isMan(joe)) {
    let x= joe.name;
}

// type guard for unknown or anything
// unknown is better than any
function isMan(type: any): type is Man {
    return 'name' in type;
}