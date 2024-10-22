// import fs from 'fs'
const fs=require('fs')


//using try-catch
// async function readFileAsync() {
//     try {
//         const data = await fs.readFile('data.txt', 'utf-8');
//         console.log('File content:', data);
//     } catch (err) {
//         console.error('Error:', err);
//     }
// }


// readFileAsync()


// With callbacks

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error('Error:', err);
    }
    console.log('File content:', data);
});
