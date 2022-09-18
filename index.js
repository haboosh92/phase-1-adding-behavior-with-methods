
// Your code here
class Cat{
constructor(name, sex){
   // do we need a constructor here ????
   this.name=name;
   this.sex=sex;
}
speak(){
   // do we need to pass the name property to speak method ????
   return `${this.name} says meow!`;
}
}
class Dog{
constructor(name, sex){
   this.name=name;
   this.sex=sex;
}
speak(){
   return `${this.name} says woof!`;
}
}
class Bird{
constructor(name, sex){
   this.name=name;
   this.sex=sex;
}
speak(){
   if(this.sex == "male"){
      return `It's me! ${this.name}, the parrot!`;
   }
   else {
      return `${this.name} says squawk!`
   }
   
}
}

const cat   = new Cat ;
const dog   = new Dog ;
const bird  = new Bird;
const bird2 = new Bird;

cat.speak('Sasha');
dog.speak('Rufio');
bird.speak('Pablo');
bird2.speak('Mable');