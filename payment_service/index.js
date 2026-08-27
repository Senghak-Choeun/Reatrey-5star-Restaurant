const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Payment Microservice is running'
    });
});

app.post('/paymentprocess', (req, res) => {
    const isPaymentSuccessful =
        req.body.paymentSuccess === true ||
        req.body.payment === true ||
        req.body.isPaymentSuccessful === true;

    if (isPaymentSuccessful) {
        return res.json({
            success: true,
            message: 'Payment processed successfully.'
        });
    }

    res.json({
        success: false,
        message: 'Payment was not successful.'
    });
});

app.listen(3003, () => console.log('Payment Microservice running on port 3003'));