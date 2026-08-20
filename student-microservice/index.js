const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint for student registration
app.post('/student-register', (req, res) => {
    const studentData = req.body;
    
    // Here you would typically save to a database
    console.log('Student Registration Received:', studentData);
    
    res.status(201).json({
        success: true,
        message: 'Student registered successfully!',
        data: studentData
    });
});

app.listen(PORT, () => {
    console.log(`Student server running on http://localhost:${PORT}`);
});