var React = require('react');
var ReactDOM = require('react-dom');
var App=require('./components/App.jsx');
var Styles={
    maxWidth: "236px",
    margin: "40px auto",
};
ReactDOM.render(<div style={Styles}><App /></div>,document.getElementById('main'));
