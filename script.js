
function loadFile(event) {
    const file = event.target.files[0];
    Papa.parse(file, {
        header: true,
        complete: function(results) {
            displayCards(results.data);
        }
    });
}

function displayCards(data) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    data.forEach(channel => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-title">${channel['Channel Name']}</div>
            <div>Subscribers: ${channel['Subscribers']}</div>
            <div><a href="https://www.youtube.com/channel/${channel['channelId']}" target="_blank">Visit Channel</a></div>
        `;
        cardsContainer.appendChild(card);
    });
}
