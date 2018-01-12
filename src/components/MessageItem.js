import React, {Component} from 'react';

class MessageItem extends Component{

	handleCheck(checked){
		let {checkedItems,id,actions} = this.props;
		
		if(checked===true){
			const index = checkedItems.indexOf(id)
			actions.removeCheckedItems(index);
		}
		else if(checked===false){
			actions.addCheckedItems(id);
		}
	}

	render(){
		let {checkedItems,id} = this.props;
		let checked = checkedItems.indexOf(id)===-1 ? false : true;

		return(
			<div className="message">
				<label className="message-checkbox">
					<input type="checkbox" checked={checked} onChange={this.handleCheck.bind(this,checked)}/>
					<span className="checkmark" />
				</label>
				<div className="message-info">
					<img className="message-img" src={this.props.icon} alt="" />
					<h5 className="message-title">{this.props.title}</h5>
					<a href="https://tw.yahoo.com/" target="_blank" className="message-btn">view</a>
				</div>
			</div>
		)
	}
}

export default MessageItem;