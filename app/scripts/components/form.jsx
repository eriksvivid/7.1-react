var React = require('react');
var ReactDOM = require('react-dom');

var Backbone = require('backbone');
require('backbone-react-component');

var ImageItem = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <li>{this.props.model.get("name")}:</li>
    )
  }
});

module.exports = ImageItem;
