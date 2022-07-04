
import { sh_alert_dialog_pt, sh_confirm_dialog_pt, sh_popup_dialog_pt } from "../TypeInterfaces";
import DialogBox from 'react-modeless'
import { Button } from "../Button";
import { useEffect, useState } from "react";
import Draggable from 'react-draggable';
import { popRoute } from "../../../routes/popupRoute";
import { useDispatch } from "react-redux";
import  * as appModuleActions from '../../../store/modules/appModule';

export const AlertDialog =({message="", headerColor="dodgerblue" , onClose}:sh_alert_dialog_pt) => { 
	const onCloseHandler = () => {
		onClose();
	}
	
	const headerClass = "color-" + headerColor;

	return (
		<DialogBox
			isOpen={true}
			onClose={onCloseHandler}
			style  = {{backgroundColor : "rgba(0, 0, 0, 0.3)", borderRadius: '4px', zIndex : '9994'}}
			backdropStyle = {{ zIndex : '9993' }}
			noBackdrop={false}
			clickBackdropToClose={false}
		>
			<div className ={"sh-alert-modal-content"}> 
				<div className = {"sh-alert-modal-content-header " + headerClass}>
					<button className="button xs grey-o" style={{float: 'right'}} onClick ={onCloseHandler}>
						<span className="button__icon">
							<i className="xi-close"></i>
						</span>
					</button>
				</div>
				<div className = "sh-alert-modal-content-body">
					<div className="md">
						<span>{message}</span>
					</div>							
				</div>
			</div>
		</DialogBox>
	);
}

export const ConfirmDialog =({message="", onClose, headerColor="dodgerblue"}:sh_confirm_dialog_pt) => { 
	const onClickHandler = (e:{id: string}) => {
		switch (e.id) {
		case 'btnConfirm':  
			onCloseHandler(true)
			break;
		case 'btnCancel': 
			onCloseHandler(false)
			break;
		default : 
			onCloseHandler(false)
			break;
		}
	}
	const onCloseHandler = (returnVal:boolean) => {
		onClose(returnVal);
	};

	const headerClass = "color-" + headerColor;

	return (
		<DialogBox
			isOpen={true}
			noBackdrop={false}
			style  = {{backgroundColor : "rgba(0, 0, 0, 0.3)", borderRadius: '4px', zIndex : '9994'}}
			backdropStyle = {{ zIndex : '9993' }}
		>
			<div className = "sh-alert-modal-content">
				<div className = {"sh-alert-modal-content-header " + headerClass}>
					<button className="button xs grey-o i" style={{float: 'right'}} onClick ={(e) => onCloseHandler(false)}>
						<span className="button__icon">
							<i className="xi-close"></i>
						</span>
					</button>
				</div>
				<div className = "sh-alert-modal-content-body">
					<div className="md">
						<span>{message}</span>
					</div>							
				</div>
				<div style={{position: 'absolute', bottom: '5px', textAlign: 'center', width: '100%', padding: '5px'}}>
					<Button id='btnConfirm'	color={headerColor} onClick ={onClickHandler} value={'예'} margin = {" 0 10px 0 0"}/>
					<Button id='btnCancel'	color={headerColor} onClick ={onClickHandler} value={'아니오'} margin = {" 0 10px 0 0"}/>
				</div>
			</div>
		</DialogBox>
	);
}


export const PopupDialog =({modaless=false,position={x:0,y:0},onClose,headerColor,popupdivid="",title,url,options}:sh_popup_dialog_pt) => { 
	const [bound, setBound] = useState({ top: 0, left : 0, right : 0, bottom : 0}); 	
	useEffect(() => {
		let eleDiv = document.getElementById(popupdivid + "_inner_div") as HTMLDivElement;

		let bound = { 
			top   : -(eleDiv.getBoundingClientRect().top),
			left  : -(eleDiv.getBoundingClientRect().left) - 400,
			right :   eleDiv.getBoundingClientRect().left  + 400,
			bottom:   eleDiv.getBoundingClientRect().top   + 400
		}
		eleDiv.scrollIntoView();

		setBound(bound);

	}, []);

	const dispatch = useDispatch();		
	const addPop = (pop:any) => dispatch(appModuleActions.addPop(pop))

	const onFocus = (e:React.FocusEvent<HTMLDivElement>) => {
		const target: HTMLDivElement = e.target;
		let current = target.parentElement?.parentElement as HTMLElement;
		current.style.zIndex = '9992'
	
	}
	const onBlur = (e:React.FocusEvent<HTMLDivElement>) => {
		const target: HTMLDivElement = e.target;
		let current = target.parentElement?.parentElement as HTMLElement;
		current.style.zIndex = '9991'
	}

	const onCloseHandler = (e:any) => {
		onClose({id: popupdivid, data: e});
	}
	const useMinimize = () => {

		addPop({id : popupdivid, name : title});
		
		let ele = document.getElementById(popupdivid) as HTMLDivElement;
		ele.hidden = true;

	}
	const headerClass = "color-" + headerColor;

	
	return (
		<DialogBox
			isOpen={true}
			noBackdrop={modaless}
			clickBackdropToClose = {true}
			style={{ zIndex : '9991' }}
			backdropStyle = {{ zIndex : '9990' }}
			onClose ={onCloseHandler}
		>
			<Draggable
				bounds={bound}
				defaultPosition = {position}
				positionOffset = {{x: '-50%', y: 0}}
				allowAnyClick ={false}
				handle = {'.sh-popup-modal-content-header'}
			>
				<div id={popupdivid + "_inner_div"} onFocus={onFocus} onBlur={onBlur} className = "sh-popup-modal-content" style={{width: options.width, height: options.height}}>
					<div id={popupdivid + "_first_div"} tabIndex={0} className = {"sh-popup-modal-content-header " + headerClass}>
						<div style={{float: 'left'}}>
							{title}
						</div>
						<button className="button xs grey-o i" style={{float: 'right'}} onClick ={onCloseHandler}>
							<span className="button__icon">
								<i className="xi-close"></i>
							</span>
						</button>
						{
							(modaless)
								?	<button className="button xs grey-o i"  style={{float: 'right'}} onClick={useMinimize}>
								<span className="button__icon">
											<i className="xi-minus"/>
										</span>
									</button>
								: null
						}
					</div>
					<div className = "sh-popup-modal-content-body" style={{overflow: 'auto'}}>
						{
							popRoute.filter(item => item.id === url).map((comp, key) => {
								return <comp.component popupdivid={popupdivid} key={'pop_' + comp.id + '_' + key} onClose={onCloseHandler} options = {options}/>
							})
						}
					</div>
					<div id={popupdivid + "_last_div"} tabIndex={0}/>
				</div>
			</Draggable>
		</DialogBox>
	);
}