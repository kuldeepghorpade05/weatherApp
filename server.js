const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9000;

// Serve static files from the current directory and the 'assets' folder
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'assets')));

// Send the landing page (index.html) when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handling: If no other route is matched
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
