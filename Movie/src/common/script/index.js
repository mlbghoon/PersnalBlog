import {createRoot} from 'react-dom/client';
import { AlertDialog, ConfirmDialog, PopupDialog } from '../components/Dialog';
import { Provider } from 'react-redux';
import store from '../../store';
import ReactDOM from 'react-dom';

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
	openPop : (url, name, options, callbackFunc) => {
		let arrPopTag = Object.values(document.body.children).filter(
			tag => tag.tagName === 'DIV'
		).filter(
			item => item.id.substring(0, newScrmObj.constants.mdi.POP_UP.length) === newScrmObj.constants.mdi.POP_UP
		);
		
		let popDiv = document.createElement('div');
		let position = {x: 0, y: 0};

		if (arrPopTag.length === 0) {
			popDiv.id = newScrmObj.constants.mdi.POP_UP + '_div_' + arrPopTag.length;
		} else {
			popDiv.id = newScrmObj.constants.mdi.POP_UP + '_div_' + (Number(arrPopTag[arrPopTag.length - 1].id.substr((newScrmObj.constants.mdi.POP_UP.length + '_div_'.length))) + 1).toString();
			position = { x : arrPopTag.length * 10,  y: arrPopTag.length * 10 }
		}
		
		document.body.appendChild(popDiv);

		const root = createRoot(popDiv);
		let headerColor = "dodgerblue";

		if (options.headerColor !== undefined) {
			headerColor = options.headerColor;
		}
		const onCloseHandler = async (e) => {
			try {
				await new Promise((resolve, reject) => {
					try {
						if (typeof callbackFunc === "function") {
							try {
								callbackFunc(e);
							} catch (err) {
								reject(err);
							}
						}
						resolve();
					} catch (error) {
						reject(error);
					}
				});
				root.unmount();
			} catch (error_1) {
				console.log(error_1);
			}
			document.body.removeChild(popDiv);
		}

		root.render(
			<Provider store={store}>
				<PopupDialog
					popupdivid = {popDiv.id}
					open={true}
					url={url}
					name={name}
					modaless={true}
					position = {position}
					options={options}
					onClose={onCloseHandler}
					headerColor={headerColor}
				/>
			</Provider>);
		return popDiv.id;
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