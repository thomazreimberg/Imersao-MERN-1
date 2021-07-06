
let a = "1"
let b = true

let x = a==b // coercion

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function map(a, list) {
    let newList = []
    list.forEach(element => {
        newList.push(a(element, 2))
    });

    return newList
}

module.exports = {
    somar: somar,
    subtrair: subtrair,
    map: map
}