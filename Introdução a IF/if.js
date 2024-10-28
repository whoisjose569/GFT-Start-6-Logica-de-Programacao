let isOn = true

// if
if (isOn){
    console.log('Hello World')
}

let possuiOvos = false
let itensComprados = ""

// if else
if (possuiOvos){
    itensComprados = "Leite"
}else{
    itensComprados = "Ovos"
}

console.log(itensComprados)

let nivelDeFome = 2

// else if

if (nivelDeFome === 1){
    console.log('Pouca fome')
}else if(nivelDeFome === 2){
    console.log('Fome média')
}else{
    console.log('Muita Fome')
}