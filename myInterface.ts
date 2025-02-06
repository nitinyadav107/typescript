interface User2 {
  email: string;
  name: string;
  age: number;
  googleId?: string;
  getCoupon(couponname: string): number;
}
interface User2{
  githubtoken:string
}
interface Admin extends User2 {
  role:"super-admin"|"admin"
}
const myUser: Admin = {
  email: "test@gmail.com",
  name: "test",
  age: 30,
  role:"super-admin",
  githubtoken:"githubtoken",
  getCoupon:(name:"nitin")=> { return 10 },
};

