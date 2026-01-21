const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// التقرير الشامل
app.get('/report', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// الرسم البياني الشامل
app.get('/comprehensive', (req, res) => {
    res.sendFile(path.join(__dirname, 'comprehensive.html'));
});

// الرسم البياني مع الأحداث
app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'events-chart.html'));
});

// تقرير أفضل 10 مضيفين
app.get('/top-hosts', (req, res) => {
    res.sendFile(path.join(__dirname, 'top-hosts-report.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running on port ' + PORT);
});
