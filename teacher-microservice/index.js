const express = require('express');
const app = express();
const PORT = 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint for teacher registration
app.post('/teacher-register', (req, res) => {
    const teacherData = req.body;
    
    // Here you would typically save to a database
    console.log('Teacher Registration Received:', teacherData);
    
    res.status(201).json({
        success: true,
        message: 'Teacher registered successfully!',
        data: teacherData
    });
});

app.listen(PORT, () => {
    console.log(`Teacher server running on http://localhost:${PORT}`);
});