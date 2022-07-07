import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

/*
A.MNU_ID
A.MNU_NM
A.PARE_MNU_ID
A.SORT_ORD
A.USE_FLAG
A.PGM_PATH
A.MNU_TP
*/

export type menu_tp = {
	MNU_ID: string; MNU_NM:string; PARE_MNU_ID: string; PGM_PATH: string;
}

export type popup_tp = {
	POP_ID: string; POP_NM:string;
}

type menus_tp = {
	selected : menu_tp | null;
	openedMenu: Array<menu_tp>;
	popupList: Array<popup_tp>;
};

// selected는 로그인 성공시 세팅 되게 (화면 전환 전에) 변경 필요 (기본화면)

const initState: menus_tp = {
	selected : {MNU_ID: 'ButtonTest', MNU_NM:'버튼', PARE_MNU_ID: "", PGM_PATH: "/ButtonTest"},
	openedMenu: [{MNU_ID: 'ButtonTest', MNU_NM:'버튼', PARE_MNU_ID: "", PGM_PATH: "/ButtonTest"}],
	popupList: []
};

const menusSlice = createSlice({
	name: 'menus',
	initialState: initState,
	reducers: {
	addTray(state, action) {	
		if (state.openedMenu.indexOf(state.openedMenu.filter(item => item.MNU_ID === action.payload.MNU_ID)[0]) < 0) {
			return {
				...state,
				openedMenu: state.openedMenu.concat(action.payload),
				selected : action.payload
			}
		} else {
			return {
				...state,
				openedMenu: state.openedMenu,
				selected : action.payload
			}
		}		
	},
    delTray(state, action) {	
		if (state.openedMenu.findIndex(element => element.MNU_ID === action.payload.MNU_ID) !== 0) {
			return {
				...state,
				openedMenu: state.openedMenu.filter(item => item.MNU_ID !== action.payload.MNU_ID),
				selected : state.openedMenu[state.openedMenu.findIndex(element => element.MNU_ID === action.payload.MNU_ID) - 1]
			}
		} else {
			return state;
		}
    },
    delAllTray(state) {
		state.openedMenu = [state.openedMenu[0]];
		state.selected = state.openedMenu[0];
    },
    selectTray(state, action) {
		return {
			...state,
			selected : action.payload
		}
    },
    prevTray(state, action) {
		if (state.openedMenu.findIndex(element => element.MNU_ID === action.payload.MNU_ID) === 0) {
			return {
				...state,
				selected : action.payload
			}
		} else {
			return {
				...state,
				selected : state.openedMenu[state.openedMenu.findIndex(element => element.MNU_ID === action.payload.MNU_ID) - 1]
			}
		}
    },
    nextTray(state, action) {	
		if (state.openedMenu.findIndex(element => element.MNU_ID === action.payload.MNU_ID) === state.openedMenu.length-1) {
			return {
				...state,
				selected : action.payload
			}
		} else {			
			return {
				...state,
				selected : state.openedMenu[state.openedMenu.findIndex(element => element.MNU_ID === action.payload.MNU_ID) + 1]
			}
		} 
    },
	addPop(state, action) {	
		return {
			...state,
			popupList: state.popupList.concat(action.payload)
		}	
	},
	deletePop(state, action) {	
		return {
			...state,
			popupList: state.popupList.filter(item => item.POP_ID !== action.payload.POP_ID)
		}	
	},
	deleteAllPop(state) {	
		return {
			...state,
			popupList: []
		}	
	},
	selectPop(state, action) {	
		return {
			...state,
			popupList: state.popupList.filter(item => item.POP_ID !== action.payload.POP_ID)
		}	
	},
  }
})


type userInfo_tp = {
	USR_ID: string; USR_NM:string; CENT_CD:string; CENT_NM: string; TEAM_CD:string; TEAM_NM: string; AUTH_LV:string; AUTH_NM: string; TOKEN: string;
}

type commCode_tp = {
	LAG_CD: string; MDM_CD:string; SML_CD:string; SML_NM: string; CD_VAL:string;
}

type menuList_tp = Array<menu_tp>;

type msgCode_tp = {
	MSG_CD: string; MSG_CONT:string;
}

export type comm_tp = {
	userInfo : userInfo_tp;
	commCode : Array<commCode_tp>;
	msgCode  : Array<msgCode_tp>;
};



export const { addTray, delTray, delAllTray, selectTray, prevTray, nextTray, addPop, deletePop, deleteAllPop, selectPop } = menusSlice.actions
export default combineReducers ({ menusSlice: menusSlice.reducer });
