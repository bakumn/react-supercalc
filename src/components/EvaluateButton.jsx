var React=require('react');
var createReactClass = require('create-react-class');

var EvaluateButton=createReactClass({
	render:function(){
		var Styles={
		    margin: "5px auto",
		};
		return(
			<div className="col-xs-3">
				<button className="btn btn-success btn-raised"  style={Styles} onClick={this.props.onClick}>=</button>
			</div>
		);
	}
});
module.exports=EvaluateButton;
