import { combineReducers } from 'redux';

export const SELECT_FILTER = 'SELECT_FILTER';
export const REQUEST_GET_DATA = 'REQUEST_GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const ADD_CHECKED_ITEMS = 'ADD_CHECKED_ITEMS';
export const REMOVE_CHECKED_ITEMS = 'REMOVE_CHECKED_ITEMS';
export const CANCEL_CHECKED_ITEMS = 'CANCEL_CHECKED_ITEMS';
export const DELETE_CHECKED_ITEMS = 'DELETE_CHECKED_ITEMS';


function filter(state='ALL',action){
	switch(action.type){
		case SELECT_FILTER:
			return action.data
			
		default:
			return state;
	}
}

function messages(state=[],action){
	switch(action.type){
		case GET_DATA_SUCCESS:
			return action.msgData.messages;

		case DELETE_CHECKED_ITEMS:
			return action.newMsgs;

		default:
			return state
	}
}

function checkedItems(state=[],action){
	switch(action.type){
		case ADD_CHECKED_ITEMS:
			return [...state,action.id];

		case REMOVE_CHECKED_ITEMS:
			return [
				...state.slice(0,action.index),
				...state.slice(action.index+1)
			]

		case DELETE_CHECKED_ITEMS:
			return [];

		case CANCEL_CHECKED_ITEMS:
			return [];

		default:
			return state
	}
}

function loadingData(state='none',action){
	switch(action.type){
		case REQUEST_GET_DATA:
			return 'loading';

		case GET_DATA_SUCCESS:
			return 'success';

		case GET_DATA_FAILURE:
			return 'failed';
			
		default:
			return state;
	}
}

const messageApp = combineReducers({
	filter,messages,checkedItems,loadingData
})

export default messageApp;