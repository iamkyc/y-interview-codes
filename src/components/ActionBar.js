import React, {Component} from 'react';

class ActionBar extends Component{
	handleDelete(){
		const {messages,checkedItems,actions} = this.props;
		let newMessages = messages.filter((message) => 
			checkedItems.indexOf(message.msg_id)===-1
		)
		actions.deleteCheckedItems(newMessages);
	}

	handleCancel(){
		this.props.actions.cancelCheckedItems();
	}

	render(){
		let className = `action-bar ${this.props.status}`;
		return(
			<div className={className}>
				<button className="red-btn action-bar-btn" onClick={this.handleDelete.bind(this)}>DELETE</button>
				<button className="white-btn action-bar-btn" onClick={this.handleCancel.bind(this)}>CANCEL</button>	
			</div>
		)
	}
}

export default ActionBar;