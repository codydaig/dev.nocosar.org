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
var ApplicationSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  first_name: def,
  middle_name: def,
  last_name: def,
  email: def,
  cell_phone: def,
  home_phone: def,
  address: def,
  address2: def,
  city: def,
  state: def,
  zip: def
});

mongoose.model('Application', ApplicationSchema);
