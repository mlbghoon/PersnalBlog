import { createSlice } from '@reduxjs/toolkit'

export type menu = {
	selected : {id: string, nm:string, pare_id?: string, path: string} | null;
	tray : {id: string, nm:string, pare_id: string, path: string}[];
	popupList: {id: string, nm:string, path: string}[];
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
		if (state.tray.indexOf(state.tray.filter(item => item === action.payload.menu)[0]) < 0) {
			state.tray.push(action.payload.menu);
			state.selected = action.payload.menu;
		} else {
			state.selected = action.payload.menu;
		}
	},
    delTray(state, action) {
		if (state.tray.findIndex(element => element === action.payload.menu) !== 0) {
			state.tray = state.tray.filter(item => item !== action.payload.menu);
			state.selected = state.tray[state.tray.findIndex(element => element === action.payload.menu) - 1];
		} 
    },
    delAllTray(state, action) {
		state.tray = [state.tray[0]];
		state.selected = state.tray[0];
    },
    selectTray(state, action) {
		state.selected = action.payload.menu;
    },
    prevTray(state, action) {
		if (state.tray.findIndex(element => element === action.payload.menu) === 0) {
			state.selected = action.payload.menu;

		} else {
			state.selected = state.tray[state.tray.findIndex(element => element === action.payload.menu) - 1];
		}
    },
    nextTray(state, action) {
		if (state.tray.findIndex(element => element === action.payload.menu) === state.tray.length-1) {
			state.selected = action.payload.menu;
		} else {
			state.selected = state.tray[state.tray.findIndex(element => element === action.payload.menu) + 1];
		} 
    }
  }
})

export const { addTray, delTray, delAllTray, selectTray, prevTray, nextTray } = menusSlice.actions
export default menusSlice.reducer