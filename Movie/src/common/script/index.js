import {createRoot} from 'react-dom/client';
import { AlertDialog, ConfirmDialog } from '../components/Dialog';

const newScrmObj = {
	constants: {
		mdi: {
			DIALOG : 'dialog',
			POP_UP : 'popup',
			PLAYER : 'player',
			realTime : 'real',
			LOADING : '_loadDiv'
		},
	}
};
const ComLib = {
	isJson: (data) => {
		try {
			let json = JSON.parse(data);
			return (typeof json === 'object');
		} catch (e) {
			return false;
		}
	},
	setSession: (id, obj) => {
		if (typeof obj === 'object') {
			sessionStorage.setItem(id, JSON.stringify(obj));
		} else {
			sessionStorage.setItem(id, obj);
		}
	},
	getSession: (id) => {
		if (ComLib.isJson(sessionStorage.getItem(id))) {
			return JSON.parse(sessionStorage.getItem(id));
		} else {
			return sessionStorage.getItem(id);
		}
	},
	openDialog : (type, msg, headerColor, callback) => {
		let dialog = document.getElementById(newScrmObj.constants.mdi.DIALOG)

		if ( document.getElementById(newScrmObj.constants.mdi.DIALOG) === undefined || document.getElementById(newScrmObj.constants.mdi.DIALOG) === null ) {			
			dialog = document.createElement('div');
			dialog.id = newScrmObj.constants.mdi.DIALOG;
			document.body.appendChild(dialog);
		}

		const root = createRoot(dialog);
		if (type === "A") {
			root.render(<AlertDialog 
				message={msg} 
				headerColor={headerColor}
				onClose={ () => { document.body.removeChild(document.getElementById(newScrmObj.constants.mdi.DIALOG));} }
			/>);
		} else {
			root.render(<ConfirmDialog 
				message={msg} 
				headerColor={headerColor}
				onClose={ (e) => { document.body.removeChild(document.getElementById(newScrmObj.constants.mdi.DIALOG));callback(e)} }
			/>);
		}
		

	},
	copyText : (txt) => {
		const element = document.createElement('textarea');
		element.textContent = txt.join('\r\n');
		// element.innerText = element.innerText.split('\r\n').join('<br/>')
		document.body.appendChild(element);

		element.select();
		document.execCommand('copy');
		document.body.removeChild(element);
		ComLib.openDialog("A", "SYSI0010", ["복사 되엇습니다."]);
	},
	writeTxtFile : (strData, strFileName) => {
		let file = new Blob([strData], {type: 'text/plain'});

		/// IE
		if (navigator.appVersion.toString().indexOf('.NET') > 0)
			window.navigator.msSaveBlob(file, strFileName);
		/// Chrome
		else{
			let element = document.createElement("a");
			element.href = window.URL.createObjectURL(file);
			element.download = strFileName;
			element.click();
		}
	},
};

export {ComLib};