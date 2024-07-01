// 3. Using bind Method with Event Listeners
// a. Create a class User with a constructor that takes a name parameter.
// b. The class should have a method greet that logs a greeting message including the user&#39;s
// name.
// c. Use the bind method to bind greet to the current instance within the constructor.
// d. Demonstrate the class by creating an instance and calling the greet method.

class User {
    constructor(name) {
      this.name = name;
      this.greet = this.greet.bind(this); 
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
  const user1 = new User('Rohit Sharma');
  user1.greet();
  
  const user2 = new User('Virat');
  user2.greet(); 
  