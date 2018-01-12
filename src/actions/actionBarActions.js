export const CANCEL_CHECKED_ITEMS = 'CANCEL_CHECKED_ITEMS';
export const DELETE_CHECKED_ITEMS = 'DELETE_CHECKED_ITEMS';

export function cancelCheckedItems(){
	return{
		type:'CANCEL_CHECKED_ITEMS'
	}
}

export function deleteCheckedItems(newMsgs){
	return{
		type:'DELETE_CHECKED_ITEMS',
		newMsgs
	}
}