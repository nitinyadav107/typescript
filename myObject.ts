// function createUser({name:string, isPaid:boolean}){}

// createUser({name:"Nitin", isPaid:true,email:"Nitin@thenetninja.co.uk"})


function createUser1({ name: string, isPaid: boolean }) { }

let user1 = { name: "Nitin", isPaid: true, email: "Nitin@thenetninja.co.uk" }

createUser1(user1)  // bad behavior of object

//type Alias

// type User={
//     name:string,
//     isPaid:boolean,
//     email?:string
// }

// function createUser2(user:User):User{
//     return user;
// }

// let user2={name:"Nitin", isPaid:true,email:"Nitin@thenetninja.co.uk"
// }

// createUser2(user2)


type User = {
  readonly id: number,
  name: string,
  isPaid: boolean,
  email?: string
}

let myUser: User = {
  id: 1,
  name: "Nitin",
  isPaid: true,
  email: "Nitin@thenetninja.co.uk"
}
myUser.email = "Nitin@thenetninja.hubi"
// myUser.id = 2