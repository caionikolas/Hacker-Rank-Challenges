//Diferentes maneiras de clonar um array usando JavaScript

const clone0 = (arr) => arr.slice(0);
const clone1 = (arr) => [...arr];
const clone2 = (arr) => Array.from(arr);
const clone3 = (arr) => arr.map((x) => x);
const clone4 = (arr) => JSON.parse(JSON.stringify(arr));
const clone5 = (arr) => arr.concat([])