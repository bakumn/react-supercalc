var React=require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var GeneralButton=createReactClass({
	propTypes: {
	    value:PropTypes.string.isRequired,
	    number:PropTypes.bool.isRequired
	},
	getDefaultProps: function() {
	    return {
	      number: true
	    };
	 },
	render:function(){
		var classes=this.props.number? "btn-primary":"btn-info";
		var Styles={
		    margin: "5px auto",
		};
		return(
			<div className="col-xs-3">
				<a className={"btn btn-raised "+classes} style={Styles} onClick={this.props.onClick}>{this.props.value}</a>
			</div>
		);
	}
});

module.exports=GeneralButton;
