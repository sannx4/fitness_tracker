const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { gender, height, weight } = req.body;

    if (!gender || !height || !weight) {
        return res.status(400).json({ message: 'Please provide gender, height, and weight.' });
    }

    const heightM = height / 100; // convert cm to meters
    const bmi = weight / (heightM * heightM);

    let bodyFat;
    if (gender === 'male') {
        bodyFat = (1.20 * bmi) + (0.23 * 25) - 16.2; // assuming age 25 for simplicity
    } else if (gender === 'female') {
        bodyFat = (1.20 * bmi) + (0.23 * 25) - 5.4; // assuming age 25 for simplicity
    } else {
        return res.status(400).json({ message: 'Invalid gender' });
    }

    bodyFat = Math.min(Math.max(bodyFat, 5), 60); // clamp values

    const waterPercentage = gender === 'male' ? 60 : 55;
    const leanMass = 100 - bodyFat - 5; // 5% estimated bone mass

    res.json({
        bodyFatPercentage: bodyFat.toFixed(1),
        waterPercentage: waterPercentage.toFixed(1),
        leanMassPercentage: leanMass.toFixed(1)
    });
});

module.exports = router;
