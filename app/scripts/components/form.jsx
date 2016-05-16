var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

var ImagesForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  addImage: function(e){
    e.preventDefault();
    var postImage = this.$el.serializeObject();
    this.props.collection.create(postImage);
    $('.form-con').toggle("medium", function(){
      $('.form-con').addClass('hidden');
    });
  },

  clear: function(e){
    e.preventDefault();
    $('.form-con').toggle("medium", function(){
      $('.form-con').addClass('hidden');
    });
  },

  render: function(){
    return(
    <form action="" className="container add-form">

      <div className="form-group url-form">
        <input name="url" type="text" className="form-control" id="img-url" placeholder="URL" />
      </div>

      <div className="form-group">
        <textarea className="form-control" name="caption" rows="5" placeholder="Caption"></textarea>
      </div>
        <div className="btn-con">
          <button id="cancel-btn" type="button" className="btn btn-default" onClick={this.clear}>Cancel</button>
          <button id="submit-btn" type="submit" className="btn btn-default" onClick={this.addImage}>
          <i className="fa fa-camera"></i>
          Add Image
          </button>
        </div>
    </form>
   )
  }
});

module.exports = ImagesForm;
