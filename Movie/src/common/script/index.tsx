import {createRoot} from 'react-dom/client';
import { AlertDialog, ConfirmDialog, PopupDialog } from '../components/Dialog';
import { Provider } from 'react-redux';
import store from '../../store';
import _ from 'lodash';
import { useState } from 'react';
import { option, sh_popup_dialog_pt } from '../components/TypeInterfaces';

const newScrmObj = {
	constants: {
		mdi: {
			DIALOG : 'dialog',
			POP_UP : 'popup',
			PLAYER : 'player',
			realTime : 'real',
			LOADING : '_loadDiv'
		},		
		rowtype: {
			CREATE_OR_UPDATE: 'cu',
			DESTROY: 'd',
			CREATE: 'c',
			UPDATE: 'u',
			READ: 'r',
		}
	}
};
const ComLib = {
	isJson: (data: any) => {
		try {
			let json = JSON.parse(data);
			return (typeof json === 'object');
		} catch (e) {
			return false;
		}
	},
	setSession: (id: string, obj: string | object) => {
		if (typeof obj === 'object') {
			sessionStorage.setItem(id, JSON.stringify(obj));
		} else {
			sessionStorage.setItem(id, obj);
		}
	},
	getSession: (id: string) => {
		if (ComLib.isJson(sessionStorage.getItem(id))) {
			return JSON.parse(sessionStorage.getItem(id) as string);
		} else {
			return sessionStorage.getItem(id);
		}
	},
	openDialog : (type: string, msg: string, headerColor: string, callback: (e: any) => void) => {
		let dialog = document.getElementById(newScrmObj.constants.mdi.DIALOG)

		if ( document.getElementById(newScrmObj.constants.mdi.DIALOG) === undefined || document.getElementById(newScrmObj.constants.mdi.DIALOG) === null ) {			
			dialog = document.createElement('div');
			dialog.id = newScrmObj.constants.mdi.DIALOG;
			document.body.appendChild(dialog);
		}

		const root = createRoot(dialog!);
		if (type === "A") {
			root.render(<AlertDialog 
				message={msg} 
				headerColor={headerColor}
				onClose={ () => { document.body.removeChild(document.getElementById(newScrmObj.constants.mdi.DIALOG)!);} }
			/>);
		} else {
			root.render(<ConfirmDialog 
				message={msg} 
				headerColor={headerColor}
				onClose={ (e) => { document.body.removeChild(document.getElementById(newScrmObj.constants.mdi.DIALOG)!);callback(e)} }
			/>);
		}	
	},
	
	openPop : (url: string, title: string, options: option, callbackFunc: (e: any) => void) => {
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
		const onCloseHandler = async (e:any) => {
			try {
				await new Promise<void>((resolve, reject) => {
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
					url={url}
					title={title}
					modaless={true}
					position = {position}
					options={options}
					onClose={onCloseHandler}
					headerColor={headerColor}
				/>
			</Provider>);
		return popDiv.id;
	},
	copyText : (txt:string) => {
		const element = document.createElement('textarea');
		// element.textContent = txt.join('\r\n');
		element.innerText = element.innerText.split('\r\n').join('<br/>')
		document.body.appendChild(element);

		element.select();
		document.execCommand('copy');
		document.body.removeChild(element);
		// ComLib.openDialog("A", "SYSI0010", ["복사 되엇습니다."]);
	},
	writeTxtFile : (strData: string, strFileName: string) => {
		let file = new Blob([strData], {type: 'text/plain'});

		let element = document.createElement("a");
		element.href = window.URL.createObjectURL(file);
		element.download = strFileName;
		element.click();

	}	
};

const useStateWithDataSet = (initialState: any) => {
	const [state, setState] = useState(initialState);
	
	const initState = (strDatasetId: string, newState: any) => {
		let objDs = state[strDatasetId];
		objDs.initRecords(newState);
	
		setState({...state, [strDatasetId]: objDs});
	};
	const setStateCB = (strDatasetId: string, newState: any) => {
	  	let objDs = state[strDatasetId];
		objDs.setRecords(newState);
  
	  	setState({...state, [strDatasetId]: objDs});
	};
	const setStateValue = (strDatasetId: string, nRowIndex: number, strColumnId: string, strValue: string | number) => {
		let objDs = state[strDatasetId];
		objDs.setValue(nRowIndex, strColumnId, strValue);
	
		setState({...state, [strDatasetId]: objDs});
	}
  
	return [state, initState, setStateCB, setStateValue];
};
type records_tp<key extends string = string>  = Record<key, string | number>;

const DataLib = {
	/*----------------------------------------------------------------------------------------
	* [변경된 Record를 Dataset Object 및 react state에 Update]
	* @param	:	state prevState, string strDatasetId, array arrRecords
	* @return	:	object
	* @see		:	1. prevState : React Class의 변경 전 state
					2. strDatasetId : Update 대상 Dataset Id 문자열 (state의 Dataset Key) ( 예 : 'dsLogin' )
					3. arrRecords : 변경된 Records (데이터 리스트) ( 예 : 쿼리 조회 결과 데이터 )
					2. 성공 => 변경 Value가 적용 된 Dataset Object 전체를 return
					   실패 => 없음
	*--------------------------------------------------------------------------------------*/
	setRecordsToDs: (prevState: any, strDatasetId: string, arrRecords: any) => {
		let objDs = prevState[strDatasetId];
		objDs.setRecords(arrRecords);
		return {[strDatasetId]: objDs};
	},
	/*----------------------------------------------------------------------------------------
	* [Dataset Record를 Initialize]
	* @param	:	state prevState, string strDatasetId, array arrRecords
	* @return	:	object
	* @see		:	1. prevState : React Class의 변경 전 state
					2. strDatasetId : Update 대상 Dataset Id 문자열 (state의 Dataset Key) ( 예 : 'dsLogin' )
					3. arrRecords : 변경된 Records (데이터 리스트) ( 예 : 쿼리 조회 결과 데이터 )
					2. 성공 => 변경 Value가 적용 된 Dataset Object 전체를 return
					   실패 => 없음
	*--------------------------------------------------------------------------------------*/
	initRecordsToDs: (prevState: any, strDatasetId: string, arrRecords: any) => {
		let objDs = prevState[strDatasetId];
		objDs.initRecords(arrRecords);
		return {[strDatasetId]: objDs};
	},
	datalist: {
		records: [] as records_tp[],
		orgrecords: [] as records_tp[], 
		header: {} as records_tp, 
		size: function() {return this.records.length;},
		getRecords: function() {
			return JSON.parse(JSON.stringify(this.records));
		},
		getTransRecords: function(strRowType: string) {
			var arrRecords = JSON.parse(JSON.stringify(this.records));
			var arrOrgRecs = this.orgrecords;

			if (strRowType !== null && (strRowType === newScrmObj.constants.rowtype.CREATE_OR_UPDATE)) arrRecords = arrRecords.filter((item:any) => item.rowtype === newScrmObj.constants.rowtype.CREATE || item.rowtype === newScrmObj.constants.rowtype.UPDATE);
			else if (strRowType !== null) arrRecords = arrRecords.filter((item:any) => item.rowtype === strRowType);
			
			for (var idxA = 0; idxA < arrRecords.length; idxA++) {
				for (var idxB = 0; idxB < arrOrgRecs.length; idxB++) {
					if (arrRecords[idxA].recid === arrOrgRecs[idxB].recid) arrRecords[idxA].orgdata = arrOrgRecs[idxB];
				}
			}
			return arrRecords;
		},
		setRecords: function(records: records_tp[]) {
			this.records = records;
		},
		appendRecords: function(records:records_tp[]) {
			this.records = this.records.concat(records);
			this.orgrecords = this.orgrecords.concat(JSON.parse(JSON.stringify(records)));
		},
		initRecords: function(records:records_tp[]) {
			records = records || [{}];
			if (records.length !== undefined) {
				this.initialize(records);
				this.records = records;
				this.orgrecords = JSON.parse(JSON.stringify(records));
			}
		},
		getValue: function(index:number, column:string) {return this.records[index][column];},
		setValue: function(index:number, column:string, value:string | number) {
			var blnModified = false;
			this.records[index][column] = value;
			if (this.records[index].rowtype !== newScrmObj.constants.rowtype.CREATE && this.records[index].rowtype !== newScrmObj.constants.rowtype.DESTROY) {
				var recid = this.records[index].recid;
				var arrCol = Object.keys(this.header);
				for (var idxA = 0; idxA < this.orgrecords.length; idxA++) {
					if (this.orgrecords[idxA].recid === recid) {
						for (var idxB = 0; idxB < arrCol.length; idxB++) {
							if (this.records[index][arrCol[idxB]] !== this.orgrecords[idxA][arrCol[idxB]]) {
								blnModified = true;
								break;
							}
						}
					}
				}
				if (blnModified) this.records[index].rowtype = newScrmObj.constants.rowtype.UPDATE;
				else this.records[index].rowtype = newScrmObj.constants.rowtype.READ;
			}
		},
		getValueByRecId: function(recid: number, column: string) {return this.records[this.indexOf("recid", recid)][column];},
		setValueByRecId: function(recid: number, column: string, value: string | number) {
			var index = this.indexOf("recid", recid);
			this.records[index][column] = value;
			if (this.records[index].rowtype !== newScrmObj.constants.rowtype.CREATE && this.records[index].rowtype !== newScrmObj.constants.rowtype.DESTROY) {
				for (var idx = 0; idx < this.orgrecords.length; idx++) {
					if (this.orgrecords[idx].recid === recid) {
						if (this.orgrecords[idx][column] === value) this.records[index].rowtype = "r";
						else if (this.orgrecords[idx][column] !== value) this.records[index].rowtype = "u";
					}
				}
			}
		},
		addRow: function(index: number | undefined) {
			if (typeof index === 'number') {
				this.records.splice(index, 0, JSON.parse(JSON.stringify(this.header)));
				this.records[index]['rowtype'] = newScrmObj.constants.rowtype.CREATE;
				this.records[index]['recid'] = this.records.length;
				return index;
			} else {
				this.records.push(JSON.parse(JSON.stringify(this.header)));
				this.records[this.size()-1]['rowtype'] = newScrmObj.constants.rowtype.CREATE;
				this.records[this.size()-1]['recid'] = this.records.length;
				return this.size() - 1;
			}
		},
		getRow: function(index: number) {
			if (this.records.length > 0) return JSON.parse(JSON.stringify([this.records[index]]));
			else return [];
		},
		indexOf: function(column: string, value: string | number) {
			var index = -1;
			for (var i = 0; i < this.records.length; i++) {
				if (this.records[i][column] === value) {
					index = i;
					break;
				}
			}
			return index;
		},
		lastIndexOf: function(column: string, value: string | number) {
			var index = -1;
			for (var i = this.records.length; i >=0; i--) {
				if (this.records[i][column] === value) {
					index = i;
					break;
				}
			}
			return index;
		},
		find: function(column: string, value: string | number) {
			return this.records.filter((new Function(`return obj => obj.${column}=='${value}'`))());
		},
		findFirst: function(column: string, value: string | number) {
			return this.getRow(this.indexOf(column, value));
		},
		findLast: function(column: string, value: string | number) {
			return this.getRow(this.lastIndexOf(column, value));
		},
		lookup: function(column: string, value: string | number, target: string) {
			var record = this.findFirst(column, value);
			return record === undefined ? undefined : record[target];
		},
		isUpdated: function() {
			if (this.records.filter(obj => obj.rowtype !== newScrmObj.constants.rowtype.READ).length > 0) return true;
			else return false;
		},
		initialize: function(records:records_tp[]) {
			for (var idx = 0; idx < records.length; idx++) {
				if (!records[idx].hasOwnProperty("recid")) records[idx].recid = idx + 1;
				if (!records[idx].hasOwnProperty("rowtype")) records[idx].rowtype = newScrmObj.constants.rowtype.READ;
			}
			if (records.length > 0) {
				var arrCol = Object.keys(records[0]);
				for (var idx = 0; idx < arrCol.length; idx++) {
					this.header[arrCol[idx]] = "";
				}
			} else {
				this.header = {};
			}
		},
		getInstance: function(props: any) {
			props = props || {};
			if (props.length !== undefined) {
				this.initialize(props);
				props = {records: props, orgrecords: JSON.parse(JSON.stringify(props))};
			}
			return _.assign({}, DataLib.datalist, props);
		},
	}
};

export {ComLib, DataLib, useStateWithDataSet};