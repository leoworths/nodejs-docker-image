//create hello world api for nodejs
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('My Devops nodejs project!');
});
app.listen(3000);
console.log('Server is running on port 3000');



