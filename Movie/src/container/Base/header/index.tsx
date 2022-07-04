import { HeaderMenu, LFloatPanel, RFloatPanel } from '../../../common/components';

const Header = (props:any) => {
	const onClickHandler = () => {

	}
	return (
		<>
			<LFloatPanel>
				<div className = 'logo' style= {{display: 'flex'}}>
					<div className = 'sh-header-left-div'/>Smart VA
				</div>
			</LFloatPanel>
			<RFloatPanel>
				<div className="sh-header-btn-div">
					{/* <IconButton classes='sh-btn-logut' id='btnLogout'	onClick={this.event.button.onClick} tooltip="로그아웃"/> */}
				</div>
			</RFloatPanel>
			<div style={{float : 'right',  position: 'absolute', right: 55}}>
				<div style={{alignContent: 'bottom', verticalAlign: 'center', height: '100%'}}>
					<div onClick={onClickHandler}>
						{/* <Label color={'white'} value={"소속 : [" + ComLib.getSession("gdsUserInfo")[0]['CENT_NM'] + ']' + ((ComLib.getSession("gdsUserInfo")[0]['TEAM_NM'] !== undefined ) ? ' / ['+ComLib.getSession("gdsUserInfo")[0]['TEAM_NM'] +']': '')}> </Label>
						<Label color={'white'} value={"사용자 : [" + ComLib.getSession("gdsUserInfo")[0]['USR_NM'] + ']'}> </Label> */}
					</div>
				</div>
			</div>			
			<HeaderMenu menu={props.menu} addTray = {props.addTray}/> 
		</>
	);
}
export default Header;