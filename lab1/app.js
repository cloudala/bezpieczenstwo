const express = require('express');
const basicAuth = require('basic-auth');

app = express();

// User credentials
const username = 'test';
const password = 'test';

// Authentication middleware
const auth = async (req, res, next) => {
    const user = basicAuth(req);
    if (!user || user.name != username || user.pass != password) {
        res.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
        return res.status(401).send('Authentication required.');
    }
    next();
}

// Home API route
app.get('/', auth, async (req, res) => {
    res.send('Welcome to the API!');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
})

// Result of curl
// C:\Users\Dell>curl localhost:3000
// Authentication required.
// C:\Users\Dell>curl -u test:test localhost:3000
// Welcome to the API!