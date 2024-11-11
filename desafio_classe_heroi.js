class heroClass{
    constructor(hero_name, age, hero_class){
        this.hero_name = hero_name
        this.age = age
        this.hero_class = hero_class
    }

    atacar(){
        switch(this.hero_class){
            case "mago":
                console.log(`O ${this.hero_class} atacou usando magia`)
                break
            
            case "guerreiro":
                console.log(`O ${this.hero_class} atacou usando espada`)
                break
            
            case "monge":
                console.log(`O ${this.hero_class} atacou usando artes marciais`)
                break
            
            case "ninja":
                console.log(`O ${this.hero_class} atacou usando shuriken`)
                break
        }
    } 
}

let myClass = new heroClass("Joventino", 32, "ninja")
myClass.atacar()