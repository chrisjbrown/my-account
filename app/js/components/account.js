'use strict';

var componentsModule = require('./_index.js');

/**
 * @ngInject
 */
function accountComponent(React, reactDirective) {

  return reactDirective(React.createClass({
      propTypes: {
        fname : React.PropTypes.string.isRequired,
        lname : React.PropTypes.string.isRequired
      },
      render: function() {
        return React.DOM.span( null, 'Hello' + this.props.fname + this.props.lname);
      }
    })
  );
}
componentsModule.directive('accountComponent', accountComponent);
