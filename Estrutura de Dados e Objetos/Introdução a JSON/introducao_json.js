let invoice = {
    name: "Joventino",
    age: 32,
    products: {
        product0: ["Mouse", 29.90],
        product1: ["Teclado", 59.90]
    }
}

console.log(invoice)
console.log(`O Nome do comprador é : ${invoice.name}`)
for (let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(`- ${productName}: ${productPrice}`)
}