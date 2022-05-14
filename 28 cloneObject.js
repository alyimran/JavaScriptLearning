// We can use Object.assign(obj) to clone an object
const obj = {
    name:"ali",
    age:18
}

const obj2 = Object.assign({} , obj)

console.log(obj2)