var React=require('react');
var createReactClass = require('create-react-class');

var ClearButton=createReactClass({
	render:function(){
		var Styles={
		    margin: "5px auto",
		};
		return(
			<div className="col-xs-3">
				<button className="btn btn-danger btn-raised" style={Styles} onClick={this.props.onClick}>C</button>
			</div>
		);
	}
});
module.exports=ClearButton;
