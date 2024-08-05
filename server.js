const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./election');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Create table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name VARCHAR(50) NOT NULL,
        middle_name VARCHAR(50),
        last_name VARCHAR(50) NOT NULL,
        DOB INTEGER
    )`);
});

// Routes
app.get('/voter-registration', (req, res) => {
    res.render('voter-registration');
});

app.post('/voter-registration', (req, res) => {
    const { first_name, middle_name, last_name, DOB } = req.body;

    db.run(`INSERT INTO users (first_name, middle_name, last_name, DOB) VALUES (?, ?, ?, ?)`, 
           [first_name, middle_name, last_name, DOB], 
           function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).json({ id: this.lastID });
    });
});

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
