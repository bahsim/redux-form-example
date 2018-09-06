
import * as types from '../constants/ActionTypes'

export function item(state = [], action) {
	switch (action.type) {
		case types.PUT_ITEM:
			return action.value;
		default:
			return state;
	}
}
