const fs = require('fs')
let names = []

const sayHello = (name) => {

    for (let i = 0; i < 4; i++) {
        names.push(`${name} ${i}`)
    }
    console.log(names)
}

sayHello('sola')

fs.readFile('./chelsea.txt', (err, data)=> {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
})

fs.writeFile('./data.txt', names.toString(), ()=> {
    console.log('file writing successful')
})


const stream = fs.createReadStream('./chelsea.txt')

const line = stream.on('data', (chunk) => {
    console.log(chunk.toString())
})