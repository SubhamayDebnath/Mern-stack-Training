// Advanced Closure with Configuration
// a. Create a function createCounter that takes an initial value and step size as parameters.
// b. The function should return an object with methods: increment, decrement, reset, and
// getValue.
// c. The increment method should increase the counter by the step size.
// d. The decrement method should decrease the counter by the step size.
// e. The reset method should reset the counter to the initial value.
// f. The getValue method should return the current value of the counter.
// g. Demonstrate the closure by creating a counter with an initial value of 10 and step size of
// 5.
const createCounter=(initValue, stepSize)=> {
    let counter = initValue;
  
    return {
      increment: function() {
        counter += stepSize;
      },
      decrement: function() {
        counter -= stepSize;
      },
      reset: function() {
        counter = initValue;
      },
      getValue: function() {
        return counter;
      }
    };
}
  
const counter = createCounter(100, 10);
  
console.log(`Get Value : ${counter.getValue()}`);
  
counter.increment();
console.log(`After increment : ${counter.getValue()}`); 
  
counter.decrement();
console.log(`After decrement : ${counter.getValue()}`); 

counter.decrement();
console.log(`After decrement : ${counter.getValue()}`);

counter.reset();
console.log(`After reset : ${counter.getValue()}`);
  