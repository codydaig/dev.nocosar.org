'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var def = {
    type: String,
    default: '',
    trim: true
  };

/**
 * Article Schema
 */
var VehicleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  make: def,
  model: def,
  year: def,
  color: def,
  equipment: def,
  plate: def,
  state: def,
  ev_permit: def
});

mongoose.model('Vehicle', VehicleSchema);
