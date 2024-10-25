const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'samuel1874@18',
    database: 'vaccination_tracker'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database!');
});

// API to add an individual
app.post('/individuals', (req, res) => {
    const { name, age, email } = req.body;
    const query = 'INSERT INTO individuals (name, age, email) VALUES (?, ?, ?)';
    db.query(query, [name, age, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: result.insertId });
    });
});

// API to add a vaccination record
app.post('/vaccinations', (req, res) => {
    const { individual_id, vaccination_type, vaccination_date, status } = req.body;
    const query = 'INSERT INTO vaccinations (individual_id, vaccination_type, vaccination_date, status) VALUES (?, ?, ?, ?)';
    db.query(query, [individual_id, vaccination_type, vaccination_date, status], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: result.insertId });
    });
});

// API to get all individuals
app.get('/individuals', (req, res) => {
    db.query('SELECT * FROM individuals', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// API to get all vaccinations
app.get('/vaccinations', (req, res) => {
    db.query('SELECT * FROM vaccinations', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
