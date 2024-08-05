const express = require('express');
const path = require('path');
const app = express();

app.use(express.json()); // To parse JSON bodies

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs template
});

app.get('/home', (req, res) => {
    res.render('index'); // Render the index.ejs template
});

app.post('/voter-registration', (req, res) => {
    console.log(req.body)
})

app.get('/voter-registration', (req, res) => {
    res.render('voter-registration.ejs')
})

// // Endpoint to handle form submission
// app.post('/api/register', (req, res) => {
//     const { firstName, middleName, lastName, email, password } = req.body;
//     // Here, you would typically save the user data to a database
//     console.log('User registered:', { firstName, middleName, lastName, email, password });
//     res.json({ message: 'User registered successfully' });
// });

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
