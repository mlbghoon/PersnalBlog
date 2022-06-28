
import { sh_alert_dialog_pt, sh_confirm_dialog_pt } from "../TypeInterfaces";
import DialogBox from 'react-modeless'
import { Button } from "../Button";

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
			clickBackdropToClose={true}
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
	const onClickHandler = (e) => {
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
	const onCloseHandler = (returnVal) => {
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
					<button className="button xs grey-o" style={{float: 'right'}} onClick ={onClickHandler}>
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
