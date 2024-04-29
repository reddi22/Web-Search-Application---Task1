const data = [{
        name: "Michael Lee",
        age: 40,
        gender: "Male",
        occupation: "Financial Analyst",
        city: "Houston",
        email: "michael.lee@example.com",
        phone: 555550130
    },
    {
        name: "Sarah Miller",
        age: 29,
        gender: "Female",
        occupation: "Graphic Designer",
        city: "Seattle",
        email: "sarah.m@example.com",
        phone: 565550144
    },
    {
        name: "Kevin Wang",
        age: 33,
        gender: "Male",
        occupation: "UX Designer",
        city: "Austin",
        email: "kevin.w@example.com",
        phone: 545550145
    },
    {
        name: "John Doe",
        age: 32,
        gender: "Male",
        occupation: "Software Engineer",
        city: "New York",
        email: "john.doe@example.com",
        phone: 15550123
    },
    {
        name: "Jane Smith",
        age: 28,
        gender: "Female",
        occupation: "Data Analyst",
        city: "San Francisco",
        email: "jane.smith@example.com",
        phone: 615550126
    },
    {
        name: "David Johnson",
        age: 45,
        gender: "Male",
        occupation: "Marketing Manager",
        city: "Chicago",
        email: "david.j@example.com",
        phone: 15550127
    },
    {
        name: "Emily Brown",
        age: 35,
        gender: "Female",
        occupation: "Project Manager",
        city: "Los Angeles",
        email: "emily.b@example.com",
        phone: 525550129
    },
    {
        name: "Daniel Rodriguez",
        age: 31,
        gender: "Male",
        occupation: "Software Engineer",
        city: "Mexico",
        email: "daniel.rodriguez@email.com",
        phone: 525550129
    },
    {
        name: "Olivia Martinez",
        age: 27,
        gender: "Female",
        occupation: "Data Analyst",
        city: "San Francisco",
        email: "olivia.martinez@email.com",
        phone: 55550130
    },
    {
        name: "Matthew Hernandez",
        age: 45,
        gender: "Male",
        occupation: "Marketing Manager",
        city: "Chicago",
        email: "matthew.hernandez@email.com",
        phone: 565550132
    },
    {
        name: "Ava Gonzalez",
        age: 35,
        gender: "Female",
        occupation: "Project Manager",
        city: "Los Angeles",
        email: "ava.gonzalez@email.com",
        phone: 565550132
    },
    {
        name: "David Perez",
        age: 40,
        gender: "Male",
        occupation: "Financial Analyst",
        city: "Houston",
        email: "david.perez@email.com",
        phone: 545550133
    },
    {
        name: "Isabella Sanchez",
        age: 29,
        gender: "Female",
        occupation: "Graphic Designer",
        city: "Seattle",
        email: "isabella.sanchez@email.com",
        phone: 575550134
    },
    {
        name: "Joseph Ramirez",
        age: 33,
        gender: "Male",
        occupation: "UX Designer",
        city: "Austin",
        email: "joseph.ramirez@email.com",
        phone: 15550135
    }
];

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton'); // Corrected variable name
const searchResultsTable = document.getElementById('searchResults').getElementsByTagName('tbody')[0];

function clearSearchResults() {
    searchResultsTable.innerHTML = ''; // Clear search results table
}

function search() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Check if the search term is empty
    if (searchTerm === "") {
        return; // Exit if the search term is empty
    }

    clearSearchResults(); // Clear previous search results

    let found = false; // Flag to track if any results are found

    data.forEach(function(person) {
        const name = person.name.toLowerCase();
        if (name.includes(searchTerm)) {
            found = true; // Set found to true if at least one result is found
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = person.name;
            row.appendChild(nameCell);
            const ageCell = document.createElement('td');
            ageCell.textContent = person.age;
            row.appendChild(ageCell);
            const genderCell = document.createElement('td');
            genderCell.textContent = person.gender;
            row.appendChild(genderCell);
            const occupationCell = document.createElement('td');
            occupationCell.textContent = person.occupation;
            row.appendChild(occupationCell);
            const cityCell = document.createElement('td');
            cityCell.textContent = person.city;
            row.appendChild(cityCell);
            const emailCell = document.createElement('td');
            emailCell.textContent = person.email;
            row.appendChild(emailCell);
            const phoneCell = document.createElement('td');
            phoneCell.textContent = person.phone;
            row.appendChild(phoneCell);
            searchResultsTable.appendChild(row);
        }
    });

    // If no results found, display "No data found"
    if (!found) {
        const noDataRow = document.createElement('tr');
        const noDataCell = document.createElement('td');
        noDataCell.setAttribute('colspan', '7'); // Span across all columns
        noDataCell.textContent = 'No data found';
        noDataRow.appendChild(noDataCell);
        searchResultsTable.appendChild(noDataRow);
    }
}

// Attach event listener to the search button for click events
searchButton.addEventListener('click', search);

// Add event listener for the clear button
document.getElementById('clearButton').addEventListener('click', clearSearchResults);