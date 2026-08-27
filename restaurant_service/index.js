const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Restaurant Microservice is running'
    });
});

app.get('/viewallrestaurant', (req, res) => {
    res.json({
        success: true,
        message: 'Restaurants retrieved successfully'
    });
});

app.get('/searchrestaurant', (req, res) => {
    res.json({
        success: true,
        message: 'Restaurant search completed successfully'
    });
});

app.listen(3001, () => console.log('Restaurant Microservice running 3001'));