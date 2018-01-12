import React, {Component} from 'react';
import MessageItem from './MessageItem';

class MessageList extends Component{
	render(){
		const {messages,checkedItems,actions,filter,loadingStatus} = this.props;
		const filteredMessages = messages.filter((message) =>{
			return filter==='ALL' || message.msg_type===filter
		})
		if(loadingStatus==='none'){
			return <h4 className="message-warning">none loading messages</h4>
		}
		if(loadingStatus==='loading'){
			return <h4 className="message-warning">Loading...</h4>
		}
		if (filteredMessages.length!==0 && loadingStatus==='success'){
			return(
				<div className="message-container">
					{	
						filteredMessages.map((message) =>
							<MessageItem 
								key={message.msg_id} 
								id={message.msg_id}
								title={message.msg_title}
								icon={message.msg_icon}
								data={message}
								checkedItems={checkedItems}
								actions={actions}
							/>
						)
					}
				</div>
			)
		}
		if (filteredMessages.length===0 && loadingStatus==='success'){
			return <h4 className="message-warning">No message.</h4>
		}
		if (loadingStatus==='failed'){
			return <h4 className="message-warning">Loading Data Failed...</h4>
		}
	}
}

export default MessageList;


