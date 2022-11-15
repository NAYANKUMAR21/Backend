var _a;
let x = 1;
var y = undefined;
var n = null;
var f = [];
var f2 = [1, 2, 3, 4];
var f3 = ["a", "b", "c", "d"];
var f4 = ["a", "b", "c", "d"];
const g = ["", 2, "xyz"];
let v;
v = 1;
v = "nayan";
const z2 = [["nayan", 1], ["string", 2]];
const z3 = [{ id: 1, author: "xyz", bool: true }, { id: 2, author: "abc", bool: true }, { id: 2, author: "gef", bool: true }];
const z5 = [{ id: 1, author: "xyz", bool: true }, { id: 2, author: "abc", bool: true }, { id: 2, author: "gef", bool: true, age: 12, gender: { value: "male" } }];
(_a = z5[1].gender) === null || _a === void 0 ? void 0 : _a.value;
const x9 = {
    load: true,
    error: false,
    succes: false,
};
const h6 = {
    tasks: [1, 2, 4],
    poss: [2, 3, 4,],
};
const nh = [{ name: "nayan", age: 12, gender: "Male" }, { name: "nayan", age: 12, gender: "Male" }, { name: "nayan", age: 12, gender: "Male" }];
const country = ["india", "japan", "USA", "UK", "france"];
//tuple its typeScript way of telling restricted the content of array and it length
const xyz = [[1, "nayan"], [2, true], [3, "xyz"]];
//giving types to function 
const xx = (a, b) => a + b;
xx(2, 1);
//if the function doesn't return anything then we write void
const something = (a, b) => {
    console.log(a + b);
};
something(1, 2);
//enum
