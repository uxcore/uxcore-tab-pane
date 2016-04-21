require('../src/view.less');

const React = require('react');

class View extends React.Component {
  render() {
    return <div className={"tabInner" + (this.props.store.isEmpty() ? ' engine-empty' : '')}>{this.props.children}</div>;
  }
}

module.exports = View;


