function getFirstName(name, splitChar){
    let firstName = name.split(" ")[0]
    return firstName
}

let userName = getFirstName("Joventino Pereira", ' ')
console.log("Seja Bem vindo " + userName)