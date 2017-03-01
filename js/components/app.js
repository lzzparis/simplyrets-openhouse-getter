var React = require('react');

var App = function App(props) {
  return (
    <div className="app">
      {props.children}
    </div>
  );
};


module.exports = App;
