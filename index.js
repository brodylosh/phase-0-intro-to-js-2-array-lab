// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
    let newArray = [];
    newArray = cats.concat(name);
    return newArray;
}

function prependCat(name) {
    let newArray = [...cats];
    newArray.unshift(name);
    return newArray;
}

function removeLastCat() {
    let newArray = [...cats];
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
    let newArray = [...cats];
    newArray.shift();
    return newArray;
}
