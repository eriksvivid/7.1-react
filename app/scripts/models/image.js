var Backbone = require('backbone');

var ImageModel = Backbone.Model.extend({

});

var ImageCollection = Backbone.Collection.extend({
  model: ImageModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/erik-images'
});

module.exports = {
  'ImageModel': ImageModel,
  'ImageCollection': ImageCollection
};
