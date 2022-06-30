import { AppPanel, HeadPanel, MainPanel, MiddlePanel } from '../common/components';
import { Main } from './Main';

import  * as appModuleActions from '../store/modules/appModule';
import { useDispatch, useSelector } from 'react-redux';
import { MenuState } from '../store/modules/appModule';
import { useEffect } from 'react';
import store from '../store';



function App() {
	const dispatch = useDispatch();
	// 각 액션들을 디스패치하는 함수들을 만드세요
	const addTray = (menu: any) => dispatch(appModuleActions.addTray(menu));
	const delTray = (menu: any) => dispatch(appModuleActions.delTray(menu));
	const delAllTray = () => dispatch(appModuleActions.delAllTray());
	const selectTray = (menu: any) => dispatch(appModuleActions.selectTray(menu));
	const prevTray = (menu: any) => dispatch(appModuleActions.prevTray(menu));
	const nextTray = (menu: any) => dispatch(appModuleActions.nextTray(menu));

	// appModuleActions.addTray({id: 'ButtonTest', nm:'ButtonTest', pare_id: "", path: "/ButtonTest"});
	useEffect(() => {
		addTray({id: 'ButtonTest', nm:'ButtonTest', pare_id: "", path: "/ButtonTest"})

	}, [])

	return (
		<AppPanel>
			<HeadPanel>
				head
			</HeadPanel>
			<MiddlePanel>
				<MainPanel>
					<Main
						openMenu     = {addTray}
						closeMenu    = {delTray}
						prevMenu     = {prevTray}
						nextMenu     = {nextTray}
						selectMenu   = {selectTray}
						closeAllMenu = {delAllTray}
					/>
				</MainPanel>
			</MiddlePanel>
		</AppPanel>
	);
}
export default App

/*
const count = useSelector((state: RootState) => state.counter.count);
const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

export default connect(
	(state) => ({
		selected : state.appModule.selected,
		tray : state.appModule.tray,
		popupList : state.appModule.popupList,
	}),
	(dispatch) => ({
		appModuleActions : bindActionCreators(appModuleActions, dispatch)
	})
)(App);
*/