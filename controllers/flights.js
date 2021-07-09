import { Flight } from '../models/flight.js'

export {
    newFlight as new,
    create,
    index,
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err){
        if (err) return res.render('flight/new')
        res.redirect('flights')
    })
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {
        err,
        flights,
        })
    })
}