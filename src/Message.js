import React, {Component} from 'react';

class Message extends Component{
	constructor(props){
		super(props);
		this.state={
			id:this.props.id,
			checked:false
		}
	}

	handleCheck(){
		if(this.props.onChange){
			this.setState({
				checked:!this.state.checked
			})

			this.props.onChange({
				id:this.state.id,
				checked:!this.state.checked
			});
		}

		console.log(this.props.onChange);
	}

	render(){
		return(
			<div className="message">
				<label className="message-checkbox">
					<input type="checkbox" checked={this.state.checked} onChange={this.handleCheck.bind(this)}/>
					<span className="checkmark" />
				</label>
				<div className="message-info">
					<img className="message-img" src={this.props.icon} alt="" />
					<h5 className="message-title">{this.props.title}</h5>
					<button className="message-btn">view</button>
				</div>
			</div>
		)
	}
}

export default Message;