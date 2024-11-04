let fruit = "morango"

switch (fruit){
    case "laranja":
        console.log("Suco de laranja")
        break
    
    case "banana":
    case "morango":
        console.log("Vitamina")
        break
    
    case "maça":
        console.log("Suco de maça")    
        break
    
    default:
        console.log("Suco generico")    
}