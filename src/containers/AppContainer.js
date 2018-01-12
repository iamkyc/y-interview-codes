import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as filterActions from '../actions/filterActions';
import * as msgActions from '../actions/msgActions';
import * as actionBarActions from '../actions/actionBarActions';

import Filter from '../components/Filter';
import ActionBar from '../components/ActionBar';
import MessageList from '../components/MessageList';

import '../css/index.css';

class App extends Component{

	componentDidMount(){
		this.props.msgActions.getData();
	}

	render(){
		const {filterActions,msgActions,actionBarActions,filter,messages,checkedItems,loadingStatus} = this.props;
		let status = (checkedItems.length===0) ? 'hide' : 'show' ;
		return(
			<div>
				<Filter actions={filterActions} filter={filter}/>
				<MessageList
					filter={filter}
					messages={messages}
					checkedItems={checkedItems}
					actions={msgActions}
					loadingStatus={loadingStatus}
				/>
			  <ActionBar 
			  	status={status} 
			  	actions={actionBarActions}
			  	messages={messages}
			  	checkedItems={checkedItems}
			  />	
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		filter:state.filter,
		messages:state.messages,
		filteredMessages:state.filteredMessages,
		checkedItems:state.checkedItems,
		loadingStatus:state.loadingData
	}
} 

function mapDispatchToProps(dispatch){
	return{
		filterActions:bindActionCreators(filterActions,dispatch),
		msgActions:bindActionCreators(msgActions,dispatch),
		actionBarActions:bindActionCreators(actionBarActions,dispatch)
	}
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);

export default AppContainer;