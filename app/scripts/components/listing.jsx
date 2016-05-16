var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var ImageList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div>
        <img className="images col-xs-10 col-xs-offset-1" src={this.props.model.get('url')} />
        <div className="caption-con col-xs-10 col-xs-offset-1">
          <p className="img-caption">{this.props.model.get('caption')}</p>
        </div>
      </div>
   )
  }
});


var ImageItem = React.createClass({
mixins: [Backbone.React.Component.mixin],
render: function(){
  var ImageListing = this.props.collection.map(function(model){
    return (
      <ImageList model={model} key={model.get('_id')}/>
    );
  });

  return (
    <div className="row text-center">
      {ImageListing}
    </div>
    )
  }
});


module.exports = {
  ImageItem: ImageItem,
  ImageList: ImageList
};
