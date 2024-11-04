let number = "1"
console.log(number == 1)
console.log(number === 1)
console.log(number !== 2)

// guardar a comparação em uma variavel TRUE ou FALSE
let result = number !== 2
console.log(result)

let cpfBlocked = "123.456.789-00"
let cpfUser = "222.111.333-11"
let isCPFBlocked = cpfUser === cpfBlocked

console.log("o usuario esta barrado? "+ isCPFBlocked)