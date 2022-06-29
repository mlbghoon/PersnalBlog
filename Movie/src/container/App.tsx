import { AppPanel, HeadPanel, MainPanel, MiddlePanel } from '../common/components';
import { Main } from './Main';
import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux';

import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import menuHandle, { MenuState } from '../store/modules/appModule';
import  * as appModuleActions from '../store/modules/appModule';
import {addTray} from  '../store/modules/appModule';
const mapState = (state:MenuState) => ({
  selected : state.selected,
  tray : state.tray,
  popupList : state.popupList,
})

// ReturnType<typeof addTray>
// | ReturnType<typeof delTray>
// | ReturnType<typeof delAllTray>
// | ReturnType<typeof selectTray>
// | ReturnType<typeof prevTray>
// | ReturnType<typeof nextTray>
// | ReturnType<typeof addPop>
// | ReturnType<typeof delPop>
// | ReturnType<typeof delAllPop>
// | ReturnType<typeof selectPop>;



const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({addTray}, dispatch);


const connector = connect(mapState, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

function App(props: PropsFromRedux) {
  return (
    <AppPanel>
		<HeadPanel>
			head
		</HeadPanel>
		<MiddlePanel>
			<MainPanel>
				<Main
					menu = {[{1:"asd"}]}
					tray={props.tray}
					selected = {props.selected}
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
export default connector(App)

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