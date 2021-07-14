import mongoose from "mongoose"

export {
    Flight
}

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: { type: Number, min: 0},
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    
    flightNo: {
        type: Number,
        minimum: 10,
        maximum: 9999,
    },

    departs: {
        type: Date,
        default: function () {
            let event = new Date()
            return event.setFullYear(event.getFullYear() + 1)
        }
    },
    tickets: [ticketSchema],
})

const Flight = mongoose.model('Flight', flightSchema)