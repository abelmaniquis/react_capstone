var React = require('react');
var ReactDOM = require('react-dom');


var TestComponent = function(){
    return(
    <h1>Hello React Project</h1>    
    )
}

document.addEventListener('DOMContentLoaded',function(){
    ReactDOM.render(<TestComponent/>, document.getElementById('app'));
});