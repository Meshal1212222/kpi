const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/report', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/comprehensive', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'comprehensive.html'));
});

// Health check for Railway
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🏠 Golden Host Dashboard running on port ${PORT}`);
    console.log(`📊 Routes:`);
    console.log(`   / - الصفحة الرئيسية`);
    console.log(`   /report - التقرير الشامل`);
    console.log(`   /comprehensive - الرسم البياني الشامل`);
});
