const express = require('express');
const axios = require('axios'); 
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Order Microservice is running'
    });
});

app.post('/addorder', async (req, res) => {
    try {
        const orderMessage = 'Order received and sent for payment processing.';
        const isPaymentSuccessful =
            req.body.paymentSuccess ??
            req.body.payment ??
            req.body.isPaymentSuccessful ??
            false;

        const paymentResponse = await axios.post('http://98.91.180.153:3003/paymentprocess', {
            ...req.body,
            paymentSuccess: isPaymentSuccessful
        });
        const paymentResult = paymentResponse.data;

        let notificationResult;
        try {
            const notificationResponse = await axios.post('http://13.221.191.186/sendnotification', {
                paymentSuccess: paymentResult.success
            });
            notificationResult = notificationResponse.data;
        } catch (notificationError) {
            notificationResult = {
                success: false,
                message: 'Notification could not be sent at this time.'
            };
        }

        res.json({
            order: {
                success: true,
                message: orderMessage
            },
            payment: {
                success: paymentResult.success,
                message: paymentResult.message
            },
            notification: {
                success: notificationResult.success,
                message: notificationResult.message
            }
        });
    } catch (error) {
        res.status(500).json({
            order: {
                success: false,
                message: 'Unable to place order at this time.'
            },
            payment: {
                success: false,
                message: 'Payment process could not be completed.'
            },
            notification: {
                success: false,
                message: 'Notification was not sent.'
            }
        });
    }
});

app.get('/vieworder', (req, res) => {
    res.json({
        success: true,
        message: 'Orders retrieved successfully'
    });
});

app.post('/cancelorder', (req, res) => {
    res.json({
        success: true,
        message: 'Order cancelled successfully'
    });
});

app.listen(3002, () => console.log('Order Microservice running on port 3002'));