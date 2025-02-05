function addTwo(num:number){
  return num+2
}
addTwo(5)

function getUpper(val:string){
  return val.toUpperCase()

}
getUpper('hello')

function signUpUser(name:string, email:string, isPaid:boolean){
  return {name, email, isPaid}
}
signUpUser('mario', 'mario@thenetninja.co.uk', false)

function loginUser(name:string, email:string, isPaid:boolean=false){
  return {name, email, isPaid}
}
loginUser('mario', 'mario@thenetninja.co.uk')

// function getValue(myValue: number): boolean {
//   if (myValue > 5) {
//     return true
//   } else {
//     return "200 OK"
//   }
// }

const getHello=(s:string):string=>{
  return ""
}

const hero=["thor", "spiderman", "ironman"]

// hero.map((hero):string=>{
//   return `hero is ${hero}`
// })
hero.map((hero)=>{
  return `hero is ${hero}`
})
function consoleError(errMsg:string):void{
  console.log("error")
}// best practice to mention the return type of function