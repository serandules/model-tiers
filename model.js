var log = require('logger')('model-tiers');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongins = require('mongins');
var validators = require('validators');

var types = validators.types;

var tier = Schema({
  name: {
    type: String,
    required: true,
    validator: types.string({
      length: 20
    })
  },
  description: {
    type: String,
    validator: types.string({
      length: 1000
    })
  },
  apis: {
    type: Object,
    required: true,
    server: true
  },
  ips: {
    type: Object,
    required: true,
    server: true
  }
}, {collection: 'tiers'});

tier.plugin(mongins());
tier.plugin(mongins.user);
tier.plugin(mongins.createdAt());
tier.plugin(mongins.updatedAt());

module.exports = mongoose.model('tiers', tier);
