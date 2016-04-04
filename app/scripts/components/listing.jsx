var React = require('react');
var ReactDOM = require('react-dom');

var Backbone = require('backbone');
require('backbone-react-component');


ImageItem = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <li>
      <img />
      {this.props.model.get("caption")}
      </li>
    )
  }
});

ImageListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    imageList = this.getCollection().map(function(image){
      return <ImageItself model={image} />
    })

    return (
      <ul>
        {imageList}
      </ul>
    )
  }
});
