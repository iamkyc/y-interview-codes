export const REQUEST_GET_DATA = 'REQUEST_GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const FILTER_MSG_DATA = 'FILTER_MSG_DATA';
export const ADD_CHECKED_ITEMS = 'ADD_CHECKED_ITEMS';
export const REMOVE_CHECKED_ITEMS = 'REMOVE_CHECKED_ITEMS';


export function getData(){
	return (dispatch) =>{
		dispatch(requestGetData());
		return 	fetch("https://jimmy319.github.io/challenge/list/")
		.then((data) => data.json())
		.then((msgData) =>{
			dispatch(getDataSuccess(msgData));
		})
		.catch((err) => {
			dispatch(getDataFailure())
			console.log(err)});
	}
}

export function requestGetData(){
	return {
		type:'REQUEST_DET_DATA'
	}
}

export function getDataSuccess(msgData){
	return {
		type:'GET_DATA_SUCCESS',
		msgData
	}
}

export function getDataFailure(){
	return {
		type:'GET_DATA_FAILURE',
	}
}

export function addCheckedItems(id){
	return {
		type:'ADD_CHECKED_ITEMS',
		id
	}
}

export function removeCheckedItems(index){
	return {
		type:'REMOVE_CHECKED_ITEMS',
		index
	}
}