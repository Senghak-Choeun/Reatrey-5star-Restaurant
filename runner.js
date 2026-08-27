const { spawn } = require('child_process');
const path = require('path');

// List of microservices with the required "_service" suffix
const services = [
    'notification_service',
    'order_service',
    'payment_service',
    'restaurant_service'
];

services.forEach((service) => {
    const servicePath = path.join(__dirname, service, 'index.js');
    
    // Spawn a node process for each index.js
    const child = spawn('node', [servicePath], {
        stdio: 'inherit'
    });

    child.on('error', (error) => {
        console.error(`Failed to start ${service}:`, error);
    });

    child.on('exit', (code) => {
        console.log(`${service} exited with code ${code}`);
    });
});