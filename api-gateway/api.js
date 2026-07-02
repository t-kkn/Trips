const express = require('express');
const fs = require('fs/promises');

const app = express();

async function getTrips() {
    const data = await fs.readFile('../json-server/db.json', 'utf8');
    return JSON.parse(data);
}

// Get all trips
app.get('/trips', async (req, res) => {
    try {
        const trips = await getTrips();
        res.json(trips);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load trips' });
    }
});

// Search trips
app.get('/api/trips', async (req, res) => {
    try {
        const keyword = (req.query.keyword || '').toLowerCase();
        const data = await getTrips();

        const filteredTrips = data.trips.filter(item =>
            item.title.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword) ||
            item.tags.some(tag => tag.toLowerCase() === keyword)
        );

        res.json(filteredTrips);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search trips' });
    }
});

app.listen(9000, () => {
    console.log('Server running on port 9000');
});
