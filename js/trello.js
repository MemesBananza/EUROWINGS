const apiKey = 'yourApiKey';  // Replace with your Trello API key
const token = 'yourApiToken'; // Replace with your Trello API token
const boardId = 'yourBoardId'; // Replace with your Trello Board ID

// Function to fetch events (cards) from Trello
async function fetchTrelloEvents() {
    const url = `https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${token}`;

    try {
        const response = await fetch(url);
        const cards = await response.json();
        displayEvents(cards);
    } catch (error) {
        console.error('Error fetching Trello data:', error);
    }
}

// Function to display events on the page
function displayEvents(cards) {
    const eventsRow = document.getElementById('events-row');
    eventsRow.innerHTML = '';

    cards.forEach(card => {
        const eventCol = document.createElement('div');
        eventCol.className = 'col-md-4';

        eventCol.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">${card.desc}</p>
                    <a href="${card.shortUrl}" class="btn btn-primary" target="_blank">View on Trello</a>
                </div>
            </div>
        `;

        eventsRow.appendChild(eventCol);
    });
}

// Fetch events on page load
fetchTrelloEvents();
