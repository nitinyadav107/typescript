class User {
  name: string;
  private age: number;
  protected email: string
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    
  }
  get getAge(): number{  //access private things outside the class
    return this.age;
  }
  setAge(age: number) {  //set private things outside the class no any return type also void
    this.age = age;
  }

}
class SubUser extends User {
  isFamily: boolean=true;
  changeAge(){
   // this.age=9; // this is not possible because age is private in parent class
  
  }
  changeEmail(){
    this.email="nitin@gmail.com"
  }

}
const nitin = new User("nitin", 10, "nitin@gmail.com");
// nitin.age = 10; // Error: Property 'age' is private and only accessible within class 'User'.