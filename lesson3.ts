// type inference by typescript from properties
interface Admin {
    name: string;
    role: string;
}
interface User {
    name: string;
    email: string;
}

function test(usr: Admin | User): void {
    // in operator
    if ('role' in usr) {
        login(usr.role)// typescript know it must be Admin type
    }
    // type guard nice but we cannot always have these
    // for every case
    if (isAdmin(usr)) {
        login(usr.role)
    }
    if ((<Admin>usr).role) {
        // login(usr.role) wont work typescript is not sure
        // if it is User or Admin
    }
}

function isAdmin(usr: Admin | User): usr is Admin {
    return (<Admin>usr).role !== undefined;
}

function login(credential: string) {
    // do something
}