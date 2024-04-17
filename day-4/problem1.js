

// Counter function that returns a closure
const Counter = () => {
    let count = 0; // Local variable 
    
    // Inner function that increments the count and returns the current count
    const increment = () => {
      count++;
      return count;
    };
  
    // Inner function that decrements the count and returns the current count
    const decrement = () => {
      count--;
      return count;
    };
  
    // Inner function 
    const getCount = () => {
      return count;
    };
  
    // Return an object with functions to  counter
    return {
      increment,
      decrement,
      getCount
    };
  };
  
  // Usage example
  const counter1 = Counter();
  console.log(counter1.getCount()); // Output: 0
  
  console.log(counter1.increment()); // Output: 1
  console.log(counter1.increment()); // Output: 2
  console.log(counter1.increment()); // Output: 3
  
  console.log(counter1.getCount()); // Output: 3
  
  console.log(counter1.decrement()); // Output: 2
  console.log(counter1.decrement()); // Output: 1
  
  console.log(counter1.getCount()); // Output: 1
  