/**
 * 1- esquema
 * 2.- nombre
 */

import mongoose from 'mongoose';
const restaurantSchema = new mongoose.Schema({
    address: {
        building: String,
        cord: [Number, Number],
        street: String,
        zipcode: String

    },
    borough: String,
    cuisine: String,
    grades: [{
        date: Date,
        grade: String,
        score: Number
    }],
    name: String,
    restaurant_id: String
})

export default mongoose.model('Restaurant',restaurantSchema)