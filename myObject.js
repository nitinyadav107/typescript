// function createUser({name:string, isPaid:boolean}){}
// createUser({name:"Nitin", isPaid:true,email:"Nitin@thenetninja.co.uk"})
function createUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var user1 = { name: "Nitin", isPaid: true, email: "Nitin@thenetninja.co.uk" };
createUser1(user1); // bad behavior of object
