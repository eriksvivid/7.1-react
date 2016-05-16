var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var model = require('./models/image');
var ImageForm = require('./components/form.jsx');
var Feed = require('./components/listing.jsx');

var images = new model.ImageCollection();
var ImageItems = Feed.ImageItem;

ReactDOM.render(
    React.createElement(ImageForm, {collection: images}),
    document.getElementById('form')
  );

images.fetch().done(function(){
  ReactDOM.render(
    React.createElement(ImageItems, {collection: images}),
    document.getElementById('images')
  );
});

$('.plus-con').click(function(){
  $('.form-con').toggle("medium", function(){
    $('.form-con').removeClass('hidden');
  });
});

$(window).scroll('down', function(){
    $('.form-con').slideUp('slow');
});
