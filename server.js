const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check for Railway
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Golden Host Report is running!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Golden Host Report running on port ${PORT}`);
    console.log(`📊 Open: http://localhost:${PORT}`);
});
