class Library {
    // definite assignment it will be assigned
    titles!: string[] // strictPropertyInitialization set to true
                        // strictNullChecks set to true as well
    note: string = '';
    capactity: number | undefined;
    constructor() { }
}

// we can also predefine to some value or assign one in constructor

const lib = new Library();
// will throw an error at runtime
const ts = lib.titles.filter(t => t.length > 2)
// will not throw an error
let noteLen = lib.note.length;
// compile time object possibly undefined
let addedOne = lib.capactity as any + 1;

