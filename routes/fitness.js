const express = require('express');
const router = express.Router();
const Fitness = require('../models/Fitness');
const auth = require('../middleware/auth');

// Add fitness entry
router.post('/', auth, async (req, res) => {
    const { weight, calories, steps, date } = req.body;
    try {
        const newEntry = new Fitness({
            userId: req.user,
            weight,
            calories,
            steps,
            date
        });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all entries for logged-in user
router.get('/', auth, async (req, res) => {
    try {
        const entries = await Fitness.find({ userId: req.user }).sort({ date: -1 });
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an entry
router.delete('/:id', auth, async (req, res) => {
    try {
        await Fitness.deleteOne({ _id: req.params.id, userId: req.user });
        res.json({ message: 'Entry deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an entry
router.put('/:id', auth, async (req, res) => {
    const { weight, calories, steps, date } = req.body;
    try {
        const updated = await Fitness.findOneAndUpdate(
            { _id: req.params.id, userId: req.user },
            { weight, calories, steps, date },
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
