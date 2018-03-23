const express = require('express');

// Port
const default_port = 4000;

// App
const app = express();

// Static
app.use(express.static('public'));

// Pdf
app.get('/getpdf', (req, res) => {
    res.download('./assets/resume.pdf', 'resume.pdf')
})
// Listen
app.listen(default_port, () => console.log(`listening to ${default_port}`));

module.exports = app;
