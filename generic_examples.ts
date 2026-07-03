function echo<T>(value: T):T {
    return value;
}

console.log(echo<number>(100));

console.log(echo<string>("Hello"));

console.log(echo<boolean>(true));