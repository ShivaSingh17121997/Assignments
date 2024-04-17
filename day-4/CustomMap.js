// Custom  map function
const customMap = (arr, callback) => {
    const mappedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(callback(arr[i], i, arr)); // Call the callback function on each element
    }
    
    return mappedArray;
  };
  
  // Example 
  const numbers = [1, 2, 3, 4, 5];
  
  // Using real map fun
  const doubledNative = numbers.map(num => num * 2);
  console.log("Using native map:", doubledNative);
  
  // Using custom map
  const doubledCustom = customMap(numbers, num => num * 2);
  console.log("Using custom map:", doubledCustom);
  