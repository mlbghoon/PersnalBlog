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

type menu_tp = {
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

type menuList_tp = {
	MSG_CD: string; MSG_CONT:string;
}

type msgCode_tp = {
	MSG_CD: string; MSG_CONT:string;
}

export type comm_tp = {
	userInfo : userInfo_tp;
	commCode : Array<commCode_tp>;
	msgCode  : Array<msgCode_tp>;
};


/*
{id: "TestPage", nm:"test페이지", pare_id: "", path: ""}
,{id: "ButtonTest", nm:"버튼", pare_id: "TestPage", path: "/TestPage/ButtonTest"}
,{id: "CheckTest", nm:"체크박스", pare_id: "TestPage", path: "/TestPage/CheckTest"}
,{id: "InputTest", nm:"인풋", pare_id: "TestPage", path: "/TestPage/InputTest"}
,{id: "ComponentTest", nm:"컴포넌트", pare_id: "TestPage", path: "/TestPage/ComponentTest"}

ComLib.setSession('gdsUserInfo',	res.data.dsUserInfo);
ComLib.setSession('gdsCommCode',	res.data.dsCommCodeInfo);

ComLib.setSession('gdsMenu', 		res.data.dsMenuInfo);
ComLib.setSession('gdsCentStndVl',	res.data.dsCentStvlInfo);
ComLib.setSession('gdsCentList',	res.data.dsCentList);
ComLib.setSession('gdsTeamList',	res.data.dsTeamList);
ComLib.setSession('gdsUserList',	res.data.dsUserList);
ComLib.setSession('gdsMsgList',		res.data.dsMsgList);
ComLib.setSession('gdsConstList',	res.data.dsConstList);
*/

export const { addTray, delTray, delAllTray, selectTray, prevTray, nextTray, addPop, deletePop, deleteAllPop, selectPop } = menusSlice.actions
export default combineReducers ({ menusSlice: menusSlice.reducer });
