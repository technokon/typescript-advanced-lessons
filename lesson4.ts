interface TestState {
    stuff:string[];
}

// discriminated unions in typescript
// string literal type for type inference
interface Action {
    type: string;
}

class Add implements Action {
    //readonly type: string = 'Add'; // cannot infer if it is a generic string
    // below type is not just a string but a type 'Add'
    readonly type = 'Add'; // only works with readonly, because it cant be sure that it changed 😎
    constructor(public payload: string) { }
}

class RemoveAll implements Action {
    readonly type = 'Remove All';
}

class ReplaceAll implements Action {
    readonly type = 'Replace All';
    constructor(public items: string[]) { }
}

// create a type union
type OurActions = Add | RemoveAll | ReplaceAll;

function reducer(action: OurActions, state: TestState): TestState {
    switch (action.type) {// now we infer based on a specific type
        case 'Add': {
            return {
                // typescript knows this is add
                stuff: [...state.stuff, action.payload]
            }
        }
        case 'Remove All': {
            return {
                stuff: []
            }
        }
        case 'Replace All': {
            return {
                // again typescript knows we have items here
                stuff: [...action.items]
            }
        }
        // compile time check to make sure we handle all the action
        // type never is used to indicate that it will never occur
        default: {
            const x: never = action;
        }
    }
}