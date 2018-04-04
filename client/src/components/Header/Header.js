var React = require('react');

var Header = React.createClass({

  getDefaultProps: function () {
    return {
      text: 'Inspiration'
    };
  },

  render: function () {
    return (
      <header>
        <div class="container">
          <div class="row">
            <div class="col-2"></div>
              <div class="col-8">
                <h1 class="header">{this.props.text}</h1>
              </div>
            <div class="col-2"></div>
          </div>
        </div>
      </header> 
    );
  } 
});

module.exports = Header;