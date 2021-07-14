import { Flight } from '../models/flight.js'
import { Destination } from '../models/destination.js'

export {
    newFlight as new,
    create,
    index,
    show,
    createTicket,
    addDestination,
}

function addDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body.destinationId)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function createTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        if (err) return res.render('flight/show')
        flight.tickets.push(req.body)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
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

function show(req, res) {
    Flight.findById(req.params.id)
    .populate('destinations')
    .exec(function (err, flight){
        Destination.find({_id: {$nin: flight.destinations}},
        function (err, newDestination){
            res.render('flights/show', {
            flight,
            newDestination,
        })
    })
})}