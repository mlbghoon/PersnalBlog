import { AppPanel, HeadPanel, MainPanel, MiddlePanel } from '../../common/components';

import  * as appModuleActions from '../../store/modules/appModule';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import Main from './main/Main';



function App() {
	const dispatch = useDispatch();
	const addTray = (menu: any) => dispatch(appModuleActions.addTray(menu));
	const delTray = (menu: any) => {dispatch(appModuleActions.delTray(menu))};
	const delAllTray = () => dispatch(appModuleActions.delAllTray());
	const selectTray = (menu: any) => dispatch(appModuleActions.selectTray(menu));
	const prevTray = (menu: any) => dispatch(appModuleActions.prevTray(menu));
	const nextTray = (menu: any) => dispatch(appModuleActions.nextTray(menu));

	type RootState = ReturnType<typeof store.getState>
	
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

	const { selected, tray } = useAppSelector((state) => state.menus.appModule)

	return (
		<AppPanel>
			<HeadPanel>
				head
			</HeadPanel>
			<MiddlePanel>
				<MainPanel>
					<Main
						tray       = {tray}
						selected   = {selected}
						addTray    = {addTray}
						delTray    = {delTray}
						prevTray   = {prevTray}
						nextTray   = {nextTray}
						selectTray = {selectTray}
						delAllTray = {delAllTray}
					/>
				</MainPanel>
			</MiddlePanel>
		</AppPanel>
	);
}
export default App;
