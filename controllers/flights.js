import { Flight } from '../models/flight.js'

export {
    newFlight as new,
    create,
    index,
    show,
    createTicket,
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
    Flight.findById(req.params.id).exec(function (err, flight){
        res.render('flights/show', {
            flight,
        })
    })
}