const fs = require('fs');

// Function to read file
const readFile = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
};

// Function to aggregate data 
const aggregateDataCallback = (filePaths, callback) => {
  let aggregateData = '';
  let filesProcessed = 0;

  //handle data reading callback
  const handleDataRead = (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    aggregateData += data;
    filesProcessed++;

    if (filesProcessed === filePaths.length) {
      callback(null, aggregateData);
    }
  };

  // Read data from each file
  filePaths.forEach(filePath => {
    readFile(filePath, handleDataRead);
  });
};

// Usage example
const files = ['file1.txt', 'file2.txt', 'file3.txt'];

aggregateDataCallback(files, (err, aggregatedData) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Aggregated Data:', aggregatedData);
});



const fs = require('fs').promises;

// Function to read data from a file using promises
const readFile1 = (filePath) => {
  return fs.readFile(filePath, 'utf8');
};

// Function to aggregate data from multiple files asynchronously using async/await
const aggregateDataAsync = async (filePaths) => {
  let aggregateData = '';

  for (let filePath of filePaths) {
    try {
      const data = await readFile(filePath);
      aggregateData += data;
    } catch (err) {
      throw err;
    }
  }

  return aggregateData;
};

// Usage example
const files = ['file1.txt', 'file2.txt', 'file3.txt'];

aggregateDataAsync(files)
  .then(aggregatedData => {
    console.log('Aggregated Data:', aggregatedData);
  })
  .catch(err => {
    console.error('Error:', err);
  });
