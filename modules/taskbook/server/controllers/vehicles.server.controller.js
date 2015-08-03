'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Vehicle = mongoose.model('Vehicle'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

// List the Vehicles for the current User
exports.list = function (req, res) {
  Vehicle.find({user: req.user}).sort('-created').populate('user', 'displayName').exec(function (err, vehicles) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(vehicles);
    }
  });
};

// Create a Vehicle
exports.create = function (req, res) {
  var vehicle = new Vehicle(req.body);
  vehicle.user = req.user;

  vehicle.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(vehicle);
    }
  });
};

// Show the Current Vehicle
exports.read = function (req, res) {
  res.json(req.vehicle);
};

exports.update = function (req, res) {
  var vehicle = req.vehicle;
  // make: def,
  vehicle.make = req.body.make;
  // model: def,
  vehicle.model = req.body.model;
  // year: def,
  vehicle.year = req.body.year;
  // color: def,
  vehicle.color = req.body.color;
  // equipment: def,
  vehicle.equipment = req.body.equipment;
  // plate: def,
  vehicle.plate = req.body.plate;
  // state: def,
  vehicle.state = req.body.state;
  // ev_permit: def
  vehicle.ev_permis = req.body.ev_permit;

  vehicle.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(vehicle);
    }
  });
};

exports.delete = function (req, res) {
  var vehicle = req.vehicle;

  vehicle.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(vehicle);
    }
  });
};

exports.vehicleByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Vehicle is invalid'
    });
  }

  Vehicle.findById(id).populate('user', 'displayName').exec(function (err, vehicle) {
    if (err) {
      return next(err);
    } else if (!vehicle) {
      return res.status(404).send({
        message: 'No vehicle with that identifier has been found'
      });
    }
    req.vehicle = vehicle;
    next();
  });
};
