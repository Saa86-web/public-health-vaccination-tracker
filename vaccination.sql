CREATE DATABASE vaccination_tracker

USE vaccination_tracker

CREATE TABLE individuals (     id INT AUTO_INCREMENT PRIMARY KEY,     name VARCHAR(100) NOT NULL,     age INT NOT NULL,     email VARCHAR(100) UNIQUE NOT NULL )

CREATE TABLE vaccinations (     id INT AUTO_INCREMENT PRIMARY KEY,     individual_id INT,     vaccination_type VARCHAR(100) NOT NULL,     vaccination_date DATE NOT NULL,     status ENUM('completed', 'pending', 'failed') NOT NULL,     FOREIGN KEY (individual_id) REFERENCES individuals(id) )
INSERT INTO individuals (name, age, email) VALUES  ('Alice', 30, 'alice@example.com'), ('Bob', 25, 'bob@example.com')

INSERT INTO vaccinations (individual_id, vaccination_type, vaccination_date, status) VALUES  (1, 'COVID-19 Vaccine', '2024-01-15', 'completed'), (2, 'Flu Vaccine', '2024-02-10', 'pending')
