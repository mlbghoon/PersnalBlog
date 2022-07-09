import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

/*
A.MNU_ID
A.MNU_NM
A.PARE_MNU_ID
A.SORT_ORD
A.USE_FLAG
*/

export type menu_tp = {
	MNU_ID: string; MNU_NM:string; PARE_MNU_ID: string;
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
	selected : {MNU_ID: 'ButtonTest', MNU_NM:'버튼', PARE_MNU_ID: ""},
	openedMenu: [{MNU_ID: 'ButtonTest', MNU_NM:'버튼', PARE_MNU_ID: ""}],
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

type standVal_tp = {
	ORG_CD: string; STND_CD:string; STND_CD_NM:string; APY_YN:string; STND_VAL: string | number;
}

type orgLag_tp = {
	ORG_CD: string; CODE_NM:string; 
}

type orgMdl_tp = {
	ORG_CD: string; CODE_NM:string; 
}

type orgSml_tp = {
	ORG_CD: string; CODE_NM:string; 
}

type user_tp = {
	ORG_LAG_CD: string; ORG_MDL_CD: string; ORG_SML_CD: string; CODE:string; CODE_NM:string; AUTH_LV:string; 
}

type msgCode_tp = {
	MSG_CD: string; MSG_CONT:string;
}

type comm_tp = {
	userInfo  : userInfo_tp;
	commCode  : Array<commCode_tp>;
	menuList  : Array<menu_tp>;
	standVal  : Array<standVal_tp>;
	orgLagList: Array<orgLag_tp>;
	orgMdlList: Array<orgMdl_tp>;
	orgSmlList: Array<orgSml_tp>;
	userList  : Array<user_tp>;
	msgCode   : Array<msgCode_tp>;
	systemDv  : string;
	svrUrl    : string;
};

const initSession: comm_tp = {
	userInfo: {
		USR_ID: '',
		USR_NM: '',
		CENT_CD: '',
		CENT_NM: '',
		TEAM_CD: '',
		TEAM_NM: '',
		AUTH_LV: '',
		AUTH_NM: '',
		TOKEN: ''
	},
	commCode: [],
	menuList: [],
	standVal: [],
	orgLagList: [],
	orgMdlList: [],
	orgSmlList: [],
	userList: [],
	msgCode: [],
	systemDv: '',
	svrUrl: ''
};


const sessionSlice = createSlice({
	name: 'sessions',
	initialState: initSession,
	reducers: {
	setUserInfo(state, action) {	
		return {
			...state,
			userInfo : action.payload
		}	
	},
	setCommCode(state, action) {	
		return {
			...state,
			commCode : action.payload
		}	
	},
	setMenuList(state, action) {	
		return {
			...state,
			menuList : action.payload
		}	
	},
	setStandVal(state, action) {	
		return {
			...state,
			standVal : action.payload
		}	
	},
	setOrgLagList(state, action) {	
		return {
			...state,
			orgLagList : action.payload
		}	
	},
	setOrgMdlList(state, action) {	
		return {
			...state,
			orgMdlList : action.payload
		}	
	},
	setOrgSmlList(state, action) {	
		return {
			...state,
			orgSmlList : action.payload
		}	
	},	
	setUserList(state, action) {	
		return {
			...state,
			userList : action.payload
		}	
	},
	setMsgCode(state, action) {	
		return {
			...state,
			msgCode : action.payload
		}	
	},
	setSystemDv(state, action) {	
		return {
			...state,
			systemDv : action.payload
		}	
	},		
	setSvrUrl(state, action) {	
		return {
			...state,
			svrUrl : action.payload
		}	
	},	
  }
})

export const { setUserInfo, setCommCode, setMenuList, setStandVal, setOrgLagList, setOrgMdlList, setOrgSmlList, setUserList, setMsgCode, setSystemDv, setSvrUrl } = sessionSlice.actions

export const { addTray, delTray, delAllTray, selectTray, prevTray, nextTray, addPop, deletePop, deleteAllPop, selectPop } = menusSlice.actions
export default combineReducers ({ menusSlice: menusSlice.reducer, sessionSlice: sessionSlice.reducer });
