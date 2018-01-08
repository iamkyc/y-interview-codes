import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filter from './Filter';
import ActionBar from './ActionBar';
import Message from './Message';
import registerServiceWorker from './registerServiceWorker';

class App extends Component{

	constructor(){
		super();
		this.state={
			filter:'ALL',
			messages:[],
			filteredMessages:[],
			checkedItems:[]
		}
	}

	componentDidMount(){
		this._getData();
	}

	_getData(){
		fetch("https://jimmy319.github.io/challenge/list/")
		.then(this._handleErrors)
		.then((data) => data.json())
		.then((msgData) =>{
			this.setState({
				messages:msgData.messages,
				filteredMessages:msgData.messages
			})
		})
		.catch(this._displayErrors);
	}

	_handleErrors(res){
		if(!res.ok){
			throw Error(res.status);
		}
		return res;
	}

	_displayErrors(err){
		console.log(err);
	}

	handleFilter(filter){
		this.setState({
			filter:filter
		})
		this._filterMessage(filter);
	}

	handleMsgChecked(checkbox){
		let checkedItems = this.state.checkedItems;
		if(checkbox.checked===true){
			checkedItems.push(checkbox.id);
		} 
		else if(checkbox.checked===false){
			const index = checkedItems.indexOf(checkbox.id);
			checkedItems.splice(index,1);
		}
		this.setState({
			checkedItems:checkedItems
		})
		
	}

	_filterMessage(filter,messages=this.state.messages){
		let filteredMsg;
		if(filter==="ALL"){
			filteredMsg = messages;
		} else{
			filteredMsg = messages.filter((message) => message.msg_type===filter);
		}
		this.setState({
			filteredMessages:filteredMsg
		})
	}

	handleAction(action){
		let checkedItems = this.state.checkedItems;
		let messages = this.state.messages;

		if(action==='delete'){
			let newMessages=messages.filter((message) => {
				return checkedItems.indexOf(message.msg_id)===-1;
			}) 
			this.setState({
				messages:newMessages,
				checkedItems:[]
			});
			this._filterMessage(this.state.filter,newMessages);
		}
		else if(action==='cancel'){
			this.setState({
				checkedItems:[],
			})
		}
	}

	render(){
		let checkedItems = this.state.checkedItems;
		let status;
		status = (checkedItems.length===0) ? 'hide' : 'show' ;

		return(
			<div>
				<Filter onClick={this.handleFilter.bind(this)}/>
				<div className="message-container">
					{this.state.filteredMessages.map((message) =>
						<Message 
							key={message.msg_id} 
							id={message.msg_id}
							title={message.msg_title}
							icon={message.msg_icon}
							data={message}
							onChange={this.handleMsgChecked.bind(this)}
						/>
					)}
				</div>	
				<ActionBar status={status} onAction={this.handleAction.bind(this)} />			
			</div>
		)
	}
} 


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
