import { createSlice, current } from '@reduxjs/toolkit'

export type tray_tp = {
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
	selected : {id: 'ButtonTest', nm:'ButtonTest', pare_id: "", path: "/ButtonTest"},
	tray : [{id: 'ButtonTest', nm:'ButtonTest', pare_id: "", path: "/ButtonTest"}
		   ,{id: 'CheckTest', nm:'CheckTest', pare_id: "", path: "/CheckTest"}
		   ,{id: 'ComponentTest', nm:'ComponentTest', pare_id: "", path: "/ComponentTest"}
		   ,{id: 'InputTest', nm:'InputTest', pare_id: "", path: "/InputTest"}],
	popupList: []
};

const menusSlice = createSlice({
  name: 'menus',
  initialState: initState,
  reducers: {
	addTray(state, action) {	
		if (state.tray.indexOf(state.tray.filter(item => item === action.payload)[0]) < 0) {
			return {
				...state,
				tray: state.tray.concat(action.payload),
				selected : action.payload
			}
		} else {
			return {
				...state,
				tray: state.tray,
				selected : action.payload
			}
		}		
	},
    delTray(state, action) {	
		if (state.tray.findIndex(element => element.id === action.payload.id) !== 0) {
			return {
				...state,
				tray: state.tray.filter(item => item.id !== action.payload.id),
				selected : state.tray[state.tray.findIndex(element => element.id === action.payload.id) - 1]
			}
		} else {
			return state;
		}
    },
    delAllTray(state) {
		state.tray = [state.tray[0]];
		state.selected = state.tray[0];
    },
    selectTray(state, action) {
		return {
			...state,
			selected : action.payload
		}
    },
    prevTray(state, action) {
		if (state.tray.findIndex(element => element.id === action.payload.id) === 0) {
			return {
				...state,
				selected : action.payload
			}
		} else {
			return {
				...state,
				selected : state.tray[state.tray.findIndex(element => element.id === action.payload.id) - 1]
			}
		}
    },
    nextTray(state, action) {	
		if (state.tray.findIndex(element => element.id === action.payload.id) === state.tray.length-1) {
			return {
				...state,
				selected : action.payload
			}
		} else {			
			return {
				...state,
				selected : state.tray[state.tray.findIndex(element => element.id === action.payload.id) + 1]
			}
		} 
    }
  }
})

export const { addTray, delTray, delAllTray, selectTray, prevTray, nextTray } = menusSlice.actions
export default menusSlice.reducer