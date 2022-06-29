import { AppPanel, HeadPanel, MainPanel, MiddlePanel } from '../common/components';
import { Main } from './Main';

import  * as appModuleActions from '../store/modules/appModule';



function App() {
	appModuleActions.addTray({id: 'ButtonTest', nm:'ButtonTest', pare_id: "", path: "/ButtonTest"});

	return (
		<AppPanel>
			<HeadPanel>
				head
			</HeadPanel>
			<MiddlePanel>
				<MainPanel>
					<Main
						openMenu = {appModuleActions.addTray}
						closeMenu = {appModuleActions.delTray}
						prevMenu = {appModuleActions.prevTray}
						nextMenu = {appModuleActions.nextTray}
						selectMenu = {appModuleActions.selectTray}
						closeAllMenu = {appModuleActions.delAllTray}
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