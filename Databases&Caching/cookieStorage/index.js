const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/logout', (req, res) => {
    res.setHeader('Clear-Site-Data', '"cache", "cookies", "storage"')
    res.redirect('/');
})

app.post('/set-preferences', (req, res) => {
    const preferences = req.body.preferences;
    res.cookie('userPreferences', preferences, { maxAge: 3600000 }); // Cookie expires in 1 hour
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
