// 액션 타입 선언
const ADD_TRAY        = 'base/ADD_TRAY'        as const;
const DELETE_TRAY     = 'base/DELETE_TRAY'     as const;
const DELETE_ALL_TRAY = 'base/DELETE_ALL_TRAY' as const;
const SELECT_TRAY     = 'base/SELECT_TRAY'     as const;
const PREVIOUS_TRAY   = 'base/PREVIOUS_TRAY'   as const;
const NEXT_TRAY       = 'base/NEXT_TRAY'       as const;
const ADD_POP         = 'base/ADD_POP'         as const;
const DELETE_POP      = 'base/DELETE_POP'      as const;
const DELETE_ALL_POP  = 'base/DELETE_ALL_POP'  as const;
const SELECT_POP      = 'base/SELECT_POP'      as const;

// 액션 생성 함수
export const addTray = (menu: {id: string, nm:string, pare_id: string, path: string}) => ({
	type: ADD_TRAY,
	payload: {
	  	menu
	}
});
export const delTray = (menu: {id: string, nm:string, pare_id: string, path: string}) => ({
	type: DELETE_TRAY,
	payload: {
	  	menu
	}
});
export const delAllTray = () => ({
	type: DELETE_ALL_TRAY,
	payload: {}
});
export const selectTray = (menu: {id: string, nm:string, pare_id: string, path: string}) => ({
	type: SELECT_TRAY,
	payload: {
	  	menu
	}
});
export const prevTray = (menu: {id: string, nm:string, pare_id: string, path: string}) => ({
	type: PREVIOUS_TRAY,
	payload: {
	  	menu
	}
});
export const nextTray = (menu: {id: string, nm:string, pare_id: string, path: string}) => ({
	type: NEXT_TRAY,
	payload: {
	  	menu
	}
});
export const addPop = (pop: {id: string, nm:string,  path: string}) => ({
	type: ADD_POP,
	payload: {
		pop
	}
});
export const delPop = (pop: {id: string, nm:string, path: string}) => ({
	type: DELETE_POP,
	payload: {
		pop
	}
});
export const delAllPop = () => ({
	type: DELETE_ALL_POP,
	payload: {}
});
export const selectPop = (pop: {id: string, nm:string, path: string}) => ({
	type: SELECT_POP,
	payload: {
		pop
	}
});

// 모든 액션 객체들에 대한 타입 준비
export type menuAction =
  ReturnType<typeof addTray>
| ReturnType<typeof delTray>
| ReturnType<typeof delAllTray>
| ReturnType<typeof selectTray>
| ReturnType<typeof prevTray>
| ReturnType<typeof nextTray>
| ReturnType<typeof addPop>
| ReturnType<typeof delPop>
| ReturnType<typeof delAllPop>
| ReturnType<typeof selectPop>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type menu = {
	selected : {id: string, nm:string, pare_id?: string, path: string} | null;
	tray : {id: string, nm:string, pare_id: string, path: string}[];
	popupList: {id: string, nm:string, path: string}[];
};

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type MenuState = menu;

// 초기 상태 선언
const initState: MenuState = {
	selected : null,
	tray : [],
	popupList: []};

// 리듀서 작성
function menuHandle(
	state: MenuState = initState,
	action: menuAction
  ): MenuState {
	let {tray, popupList} = state

	switch (action.type) {
		case ADD_TRAY:
			if (tray.indexOf(tray.filter(item => item === action.payload.menu)[0]) < 0) {
				return {
					...state,
					tray: state.tray.concat(action.payload.menu),
					selected : action.payload.menu
				}
			} else {
				return {
					...state,
					tray: state.tray,
					selected : action.payload.menu
				}
			}
		case DELETE_TRAY:
			if (tray.findIndex(element => element === action.payload.menu) !== 0) {
				return {
					...state,
					tray : tray.filter(item => item !== action.payload.menu),
					selected : tray[state.tray.findIndex(element => element === action.payload.menu) - 1]
				};
			} else {
				return state;
			}
		case DELETE_ALL_TRAY:
			return {
				...state,
				tray : [tray[0]],
				selected : tray[0]
			};
		case SELECT_TRAY:
			return {
				...state,
				selected : action.payload.menu
			}
		case PREVIOUS_TRAY:
			if (tray.findIndex(element => element === action.payload.menu) === 0) {
				return {
					...state,
					selected : action.payload.menu
				}
			} else {
				return {
					...state,
					selected : tray[tray.findIndex(element => element === action.payload.menu) - 1]
				}
			}
		case NEXT_TRAY:
			if (tray.findIndex(element => element === action.payload.menu) === tray.length-1) {
				return {
					...state,
					selected : action.payload.menu
				}
			} else {
				return {
					...state,
					selected : tray[tray.findIndex(element => element === action.payload.menu) + 1]
				}
			}
		case ADD_POP:
			return { 
				...state, 
				popupList: popupList.concat(action.payload.pop) 
			};
		case DELETE_POP:

			return { 
				...state, 
				popupList: popupList.filter(item => item.id !== action.payload.pop.id) };
		case DELETE_ALL_POP:

			return { ...state , popupList : [] };
		case SELECT_POP:
			
			return { 
				...state, 
				popupList : popupList.filter(item => item.id !== action.payload.pop.id) };
	  default:
		return state;
	}
}

export default menuHandle
