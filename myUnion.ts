let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string,
  id: number
}

type Admin = {
  username: string,
  id: number
}

let person: User | Admin = { name: "John", id: 33 }
person = { username: "John", id: 33 }


function getDbId(id: number | string) {
  // make an http request
  console.log(`DB id is: ${id}`)
}

getDbId(3)
getDbId("3")

function getDbId2(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase()
  }
  else {
    id.toFixed()
  }


}
getDbId2(3)
getDbId2("3")

// array
const Data5: (number[]  )= [1, 2, 3]
const Data6: (string[] | number[] )= [1, 2, 3]
const Data7: (number[] | string[] | boolean[] )= [1, 2, 3]
const Data8: (string | number | boolean)[] = [1, true, "John"]


