import { Destination } from '../models/destination.js'

export {
    newDestination as new,
    create,
}

function create (req,res){
    const destination = new Destination(req.body)
    destination.save(function(err){
        if (err) return res.redirect('/destinations/new')
        res.redirect('/destinations/new')
    })
}

function newDestination (req, res) {
    Destination.find({}, function(err, destinations){
        res.render('destinations/new', {
        destinations,
        err,
        })
    })
}