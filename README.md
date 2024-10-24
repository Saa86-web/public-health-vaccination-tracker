# public-health-vaccination-tracker
# Public Health Vaccination Tracker

## Overview

The **Public Health Vaccination Tracker** is a web application designed to help communities track vaccination records of individuals. This project allows users to add individuals, record their vaccinations, and monitor their vaccination status. It aims to support public health initiatives by providing a simple way to manage vaccination data.

## Features

- Add individuals with name, age, and email.
- Record vaccination details, including type, date, and status.
- View lists of individuals and their vaccination records.
- Simple and intuitive user interface.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MySQL
- **Other Libraries:** `body-parser`, `cors`, `mysql2`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [MySQL](https://www.mysql.com/) (version 5.7 or higher)
- Basic knowledge of JavaScript and SQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Saa86-web/vaccination-tracker.git
   cd vaccination-tracker
Set up the MySQL database:

Open MySQL and run the following commands to create the database and tables:
sql
Copy code
CREATE DATABASE vaccination_tracker;

USE vaccination_tracker;

CREATE TABLE individuals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE vaccinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    individual_id INT,
    vaccination_type VARCHAR(100) NOT NULL,
    vaccination_date DATE NOT NULL,
    status ENUM('completed', 'pending', 'failed') NOT NULL,
    FOREIGN KEY (individual_id) REFERENCES individuals(id)
);
Install Node.js dependencies:

bash
Copy code
npm install
Configure the database connection:

Open server.js and update the database connection details with your MySQL credentials.
Run the server:

bash
Copy code
node server.js
Open the frontend:

Open index.html in your web browser.
Usage
Use the form to add individuals by providing their name, age, and email.
Use the vaccination form to record vaccinations by entering the individual's ID, vaccination type, date, and status.
View the lists of individuals and vaccinations below the forms.
API Endpoints
POST /individuals - Add a new individual
POST /vaccinations - Add a new vaccination record
GET /individuals - Retrieve all individuals
GET /vaccinations - Retrieve all vaccinations
