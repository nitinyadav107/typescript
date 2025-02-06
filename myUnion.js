var score = 33;
score = 44;
score = "55";
var person = { name: "John", id: 33 };
person = { username: "John", id: 33 };
function getDbId(id) {
    // make an http request
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
function getDbId2(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id.toFixed();
    }
}
getDbId2(3);
getDbId2("3");
// array
var Data5 = [1, 2, 3];
var Data6 = [1, 2, 3];
var Data7 = [1, 2, 3];
var Data8 = [1, true, "John"];
