import { AppPanel, FooterPanel, HeadPanel, MainPanel, MiddlePanel } from '../../common/components';

import  * as appModuleActions from '../../store/modules/appModule';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import Main from './main/Main';
import Header from './header';
import Footer from './footer';
import { useState } from 'react';

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

	const { selected, openedMenu, popupList } = useAppSelector((state) => state.menus.menusSlice)



	const [menu, setMenu] = useState([{MNU_ID: "TestPage", MNU_NM:"test페이지", PARE_MNU_ID: ""}
									 ,{MNU_ID: "ButtonTest", MNU_NM:"버튼", PARE_MNU_ID: "TestPage"}
									 ,{MNU_ID: "CheckTest", MNU_NM:"체크박스", PARE_MNU_ID: "TestPage"}
									 ,{MNU_ID: "InputTest", MNU_NM:"인풋", PARE_MNU_ID: "TestPage"}
									 ,{MNU_ID: "ComponentTest", MNU_NM:"컴포넌트", PARE_MNU_ID: "TestPage"}]); 	

	return (
		<AppPanel>
			<HeadPanel>
				<Header
					menu       = {menu}				
					addTray = {addTray}
				/>
			</HeadPanel>
			<MiddlePanel>
				<MainPanel>
					<Main
						openedMenu  = {openedMenu}
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
