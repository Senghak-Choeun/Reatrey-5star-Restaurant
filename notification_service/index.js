const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Notification Microservice is running'
    });
});

app.post('/sendnotification', (req, res) => {
    const isPaymentSuccessful = req.body.paymentSuccess === true;
    const notificationMessage = isPaymentSuccessful
        ? 'Your payment is successful. We have sent you a confirmation message.'
        : 'Payment not yet done. We have sent you a reminder notification.';

    res.json({
        success: true,
        message: notificationMessage
    });
});

app.listen(3004, () => console.log('Notification Microservice running on port 3004'));