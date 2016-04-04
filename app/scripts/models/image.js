var $ = require('jquery');
var Backbone = require('backbone');

var ImageModel = Backbone.Model.extend();

var ImageCollection = BackboneCollection.extend({
  model: ImageModel
});

module.exports = {'ImageCollection': ImageCollection};
