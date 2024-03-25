// // // Printing in console
const name = 'Heraksh';
console.log(name);

// // // Global Declaration
const speak = () => {
    console.log('Hello Heraksh');
}

// speak();

// // Global Objects
console.log(global)
global.setTimeout(()=>{
    console.log('in the timeout')
},3000);

// // To set time interval 
const int =  setInterval(() => {
    console.log('in the interval');
}, 1000);


// // To check current directly and file name 
console.log(__dirname);
console.log(__filename);

// Importing the people file which is created  
const people = require('./people');
console.log(people)

//Printing only required data
const data = require('./people');
console.log(data.ages)

//Multiple Import - Most used
const{people,ages} = require('./people');
console.log(people);
console.log(ages);

//Fetch related OS Information
const os = require('os')
console.log(os.platform()) //os information 
console.log(os.homedir()) //home/root directory

//Fetch and play with File system 
// snippet reads a file named ipl.txt asynchronously using Node.js fs.readFile function
const fs = require('fs');

fs.readFile('./ipl.txt', (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data.toString());
    }
});


// fs.writeFile() is used to write data to the file named output.txt.
// The content variable holds the string that will be written to the file.
// The callback function is called after the operation completes. If an error occurred during the write operation, it will be passed to the error parameter. Otherwise, the file was written successfully.
const fs = require('fs');

const content = 'Hello from isocrates';
fs.writeFile('./output.txt', content, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('File written successfully.');
    }
});

//Working with creating directory
const fs = require('fs');

const folderName = './NanFolder';

fs.mkdir(folderName, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Folder created successfully.');
    }
});

//check already files exists or not then will create folder
const fs = require('fs');
const folderName = './NanFolder';

// Check if the folder exists
if (fs.existsSync(folderName)) {
    console.log('Folder already exists.');
} else {
    // Create the folder
    fs.mkdir(folderName, (error) => {
        if (error) {
            console.error('Error creating folder:', error);
        } else {
            console.log('Folder created successfully.');
        }
    });
}

//check already files exists or not then will remove folder
const fs = require('fs');
const folderName = './NanFolder';

// Check if the folder exists
if (fs.existsSync(folderName)) {
    console.log('Folder is not available');
} else {
    // Create the folder
    fs.rmdir(folderName, (error) => {
        if (error) {
            console.error('Error removing folder:', error);
        } else {
            console.log('Folder Deleted Successfully');
        }
    });
}

//Deleting the file which is existing 

const fs = require('fs');

const fileName = './ipl.txt';

// Check if the file exists
if (fs.existsSync(fileName)) {
    // Delete the file
    fs.unlink(fileName, (error) => {
        if (error) {
            console.error('Error deleting file:', error);
        } else {
            console.log('File deleted successfully.');
        }
    });
} else {
    console.log('File does not exist.');
}

//Streams - file handling (Play with larger data) -- Reading stream
const fs = require('fs');

const readStream = fs.createReadStream('./sample.txt', { encoding: 'utf8' });

readStream.on('data', chunk => {
    console.log(chunk);
});

//Writing stream 
const fs = require('fs');
const readStream = fs.createReadStream('./sample.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./output.txt');

readStream.on('data', chunk => {
    writeStream.write(chunk);
});




