/<div className="message-container">
					{this.state.filteredMessages.map((message) =>
						<Message 
							key={message.msg_id} 
							id={message.msg_id}
							title={message.msg_title}
							icon={message.msg_icon}
							data={message}
							onChange={this.handleMsgChecked.bind(this)}
							checked={this.state.checkedItems.indexOf(message.msg_id)===-1 ? false : true}
						/>
					)}
				</div>	
				<ActionBar status={status} onAction={this.handleAction.bind(this)} />			