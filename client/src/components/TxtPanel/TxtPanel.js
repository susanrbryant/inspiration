var React = require('react');

var TxtPanel = React.createClass({

  getDefaultProps: function () {
    return {
        heading: 'contents.heading',
        content: 'contents.content'
    };
  },

  render: function () {
    return (

        <div class="container-fluid">
          <div class="row">
            {/*<div class="col-4"></div>
            <div class="col-8">*/}
                <div class="TxtPanel">
                    <h2>{this.props.heading}</h2>
                    <div>{this.props.content}</div>
                </div>
            {/*</div>*/}
          </div>
        </div>
    );
  } 
});

module.exports = TxtPanel;