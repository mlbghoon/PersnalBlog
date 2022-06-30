import { createSlice } from '@reduxjs/toolkit'

type tray_tp = {
	id: string, nm:string, pare_id: string, path: string
}
type popupList_tp = {
	id: string, nm:string, path: string
}

export type menu = {
	selected : {id: string, nm:string, pare_id?: string, path: string} | null;
	tray     : Array<tray_tp>;
	popupList: Array<popupList_tp>;
};

export type MenuState = menu;

const initState: MenuState = {
	selected : null,
	tray : [],
	popupList: []
};

const menusSlice = createSlice({
  name: 'menus',
  initialState: initState,
  reducers: {
	addTray(state, action) {
		if (state.tray.indexOf(state.tray.filter(item => item === action.payload)[0]) < 0) {
			state.tray.push(action.payload);
			state.selected = action.payload;
		} else {
			state.selected = action.payload;
		}
	},
    delTray(state, action) {
		if (state.tray.findIndex(element => element === action.payload) !== 0) {
			state.tray = state.tray.filter(item => item !== action.payload);
			state.selected = state.tray[state.tray.findIndex(element => element === action.payload) - 1];
		} 
    },
    delAllTray(state) {
		state.tray = [state.tray[0]];
		state.selected = state.tray[0];
    },
    selectTray(state, action) {
		state.selected = action.payload;
    },
    prevTray(state, action) {
		if (state.tray.findIndex(element => element === action.payload) === 0) {
			state.selected = action.payload;

		} else {
			state.selected = state.tray[state.tray.findIndex(element => element === action.payload) - 1];
		}
    },
    nextTray(state, action) {
		if (state.tray.findIndex(element => element === action.payload) === state.tray.length-1) {
			state.selected = action.payload;
		} else {
			state.selected = state.tray[state.tray.findIndex(element => element === action.payload) + 1];
		} 
    }
  }
})

export const { addTray, delTray, delAllTray, selectTray, prevTray, nextTray } = menusSlice.actions
export default menusSlice.reducer