import { AppPanel, FooterPanel, HeadPanel, MainPanel, MiddlePanel } from '../../common/components';

import  * as appModuleActions from '../../store/modules/appModule';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import Main from './main/Main';
import Header from './header';
import Footer from './footer';

function App() {
	const dispatch = useDispatch();
	const addTray = (menu: any) => dispatch(appModuleActions.addTray(menu));
	const delTray = (menu: any) => {dispatch(appModuleActions.delTray(menu))};
	const delAllTray = () => dispatch(appModuleActions.delAllTray());
	const selectTray = (menu: any) => dispatch(appModuleActions.selectTray(menu));
	const prevTray = (menu: any) => dispatch(appModuleActions.prevTray(menu));
	const nextTray = (menu: any) => dispatch(appModuleActions.nextTray(menu));

	const addPop = (pop:any) => dispatch(appModuleActions.addPop(pop))
	const deletePop = (pop:any) => dispatch(appModuleActions.deletePop(pop))
	const deleteAllPop = (pop:any) => dispatch(appModuleActions.deleteAllPop())
	const selectPop = (pop:any) => dispatch(appModuleActions.selectPop(pop))

	type RootState = ReturnType<typeof store.getState>
	
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

	const { selected, tray, popupList } = useAppSelector((state) => state.menus.appModule)

	return (
		<AppPanel>
			<HeadPanel>
				<Header/>
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
			<FooterPanel>
				<Footer
					popupList    = {popupList}
					deletePop    = {deletePop}
					deleteAllPop = {deleteAllPop}
					selectPop    = {selectPop}
				/>
			</FooterPanel>
		</AppPanel>
	);
}
export default App;
