const parent = {
    name : 'kim',
    age : 50
}

const child = Object.create(parent);
console.log(child)
child.name="lee"
child.age=20
console.log(child.name)
console.log(child.age)