
import { sh_dialog_pt } from "../TypeInterfaces";

import DialogBox from 'react-modeless'
import { Button } from "../Button";

export const AlertDialog =({open=false, message="", onClose=()=>{return}}:sh_dialog_pt) => { 
	const onCloseHandler = () => {
		onClose();
	}
	
	return (
		<DialogBox
			isOpen={open}
			onClose={onCloseHandler}
			style  = {{backgroundColor : "rgba(0, 0, 0, 0.3)", borderRadius: '4px', zIndex : '9994'}}
			backdropStyle = {{ zIndex : '9993' }}
			noBackdrop={false}
			clickBackdropToClose={true}
		>
			<div className = "sh-alert-modal-content">
				<div className = "sh-alert-modal-content-header">
					<button className="button xs grey-o" style={{float: 'right'}} onClick ={onCloseHandler}>
						<span className="button__icon">
							<i className="xi-close"></i>
						</span>
					</button>
				</div>
				<div className = "sh-alert-modal-content-body">
					<div className="sh-label-div md">
						<span>{message}</span>
					</div>							
				</div>
			</div>
		</DialogBox>
	);
}
