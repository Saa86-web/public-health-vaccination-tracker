document.getElementById('individualForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://localhost:3000/individuals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age, email })
    });

    if (response.ok) {
        alert('Individual added successfully!');
        loadIndividuals();
    }
});

document.getElementById('vaccinationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const individualId = document.getElementById('individualId').value;
    const vaccinationType = document.getElementById('vaccinationType').value;
    const vaccinationDate = document.getElementById('vaccinationDate').value;
    const status = document.getElementById('status').value;

    const response = await fetch('http://localhost:3000/vaccinations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ individual_id: individualId, vaccination_type: vaccinationType, vaccination_date: vaccinationDate, status })
    });

    if (response.ok) {
        alert('Vaccination added successfully!');
        loadVaccinations();
    }
});

async function loadIndividuals() {
    const response = await fetch('http://localhost:3000/individuals');
    const individuals = await response.json();
    const individualList = document.getElementById('individualList');
    individualList.innerHTML = '';
    individuals.forEach(individual => {
        const li = document.createElement('li');
        li.textContent = `${individual.name} (Age: ${individual.age}, Email: ${individual.email})`;
        individualList.appendChild(li);
    });
}

async function loadVaccinations() {
    const response = await fetch('http://localhost:3000/vaccinations');
    const vaccinations = await response.json();
    const vaccinationList = document.getElementById('vaccinationList');
    vaccinationList.innerHTML = '';
    vaccinations.forEach(vaccination => {
        const li = document.createElement('li');
        li.textContent = `Individual ID: ${vaccination.individual_id}, Type: ${vaccination.vaccination_type}, Date: ${vaccination.vaccination_date}, Status: ${vaccination.status}`;
        vaccinationList.appendChild(li);
    });
}

// Load data on page load
window.onload = () => {
    loadIndividuals();
    loadVaccinations();
};
