// function createUser({name:string, isPaid:boolean}){}
// createUser({name:"Nitin", isPaid:true,email:"Nitin@thenetninja.co.uk"})
function createUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var user1 = { name: "Nitin", isPaid: true, email: "Nitin@thenetninja.co.uk" };
createUser1(user1); // bad behavior of object
var myUser = {
    id: 1,
    name: "Nitin",
    isPaid: true,
    email: "Nitin@thenetninja.co.uk"
};
myUser.email = "Nitin@thenetninja.hubi";
// myUser.id = 2
