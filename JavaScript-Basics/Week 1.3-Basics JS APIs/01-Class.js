class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak(){
        console.log(`hi there ${this.speaks}`)
    }
    static 
}

let dog = new Animal("dog","four legs", "bark");
console.log(dog.legCount)
dog.speak();