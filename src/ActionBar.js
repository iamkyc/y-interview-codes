import React, {Component} from 'react';

class ActionBar extends Component{
	handleDelete(){
		if(this.props.onAction){
			this.props.onAction('delete');
		}
	}

	handleCancel(){
		if(this.props.onAction){
			this.props.onAction('cancel');
		}
	}

	render(){
		let className = `action-bar ${this.props.status}`
		return(
			<div className={className}>
				<button className="red-btn action-bar-btn" onClick={this.handleDelete.bind(this)}>DELETE</button>
				<button className="white-btn action-bar-btn" onClick={this.handleCancel.bind(this)}>CANCEL</button>	
			</div>
		)
	}
}

export default ActionBar;