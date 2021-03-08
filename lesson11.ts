interface StringContainer {
    value: string;
    format(): string;
    split(): string[];
}

interface NumberContainer {
    value: number;
    nearestPrime: number;
    round(): number;
}

type Item<T> = {
    id: T,
    container: T extends string ? StringContainer: NumberContainer;
}

// this is a type guard
function isStringItem(type: unknown): type is Item<string> {
    return !!(<Item<string>>type).container;
}


let item: unknown = {
    id: 'fffff',
    container: {
        value: 'test',
        format() { return this.value.trim()},
        split() { return this.value.split(';')}
    },
}

if (isStringItem(item)) {
    const x = item.container.format();
}

