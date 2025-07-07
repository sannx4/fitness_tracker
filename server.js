const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Basic route for testing
app.get('/', (req, res) => res.send('API Running'));

// Auth Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// ✅ Add this for fitness CRUD:
const fitnessRoutes = require('./routes/fitness');
app.use('/api/fitness', fitnessRoutes);

const foodRoutes = require('./routes/foodRoutes');
app.use('/api/foods', foodRoutes);


const bodyCompositionRoutes = require('./routes/bodyComposition');
app.use('/api/bodycomposition', bodyCompositionRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
