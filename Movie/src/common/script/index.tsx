import {createRoot} from 'react-dom/client';
import { AlertDialog, ConfirmDialog, PopupDialog } from '../components/Dialog';
import { Provider } from 'react-redux';
import store from '../../store';
import _ from 'lodash';
import { useState } from 'react';
import { option } from '../components/TypeInterfaces';
import ReactDOM from 'react-dom';
import { loadProgressBar } from 'x-axios-progress-bar';
import axios from 'axios';

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
		},
		crud: {			
			read: 'r',
			create: 'c',
			update: 'u',
			destroy: 'd',
			remove: 'e'
		}
	}
};
const ComLib = {
	isJson: (data: any) => {
		try {
			const json = JSON.parse(data);
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
	openDialog : (type: string, msg: string, headerColor: string, callback?: (e: any) => void) => {
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
				onClose={ (e) => { document.body.removeChild(document.getElementById(newScrmObj.constants.mdi.DIALOG)!); if(callback)callback(e);} }
			/>);
		}	
	},
	
	openPop : (url: string, title: string, options: option, callbackFunc: (e: any) => void) => {
		const arrPopTag = Object.values(document.body.children).filter(
			tag => tag.tagName === 'DIV'
		).filter(
			item => item.id.substring(0, newScrmObj.constants.mdi.POP_UP.length) === newScrmObj.constants.mdi.POP_UP
		);
		
		const popDiv = document.createElement('div');
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
		const file = new Blob([strData], {type: 'text/plain'});

		const element = document.createElement("a");
		element.href = window.URL.createObjectURL(file);
		element.download = strFileName;
		element.click();

	}	
};

const useStateWithDataSet = (initialState: any) => {
	const [state, setState] = useState(initialState);
	
	const initState = (strDatasetId: string, newState: any) => {
		const objDs = state[strDatasetId];
		objDs.initRecords(newState);
	
		setState({...state, [strDatasetId]: objDs});
	};
	const setStateCB = (strDatasetId: string, newState: any) => {
		const objDs = state[strDatasetId];
		objDs.setRecords(newState);
  
	  	setState({...state, [strDatasetId]: objDs});
	};
	const setStateValue = (strDatasetId: string, nRowIndex: number, strColumnId: string, strValue: string | number) => {
		const objDs = state[strDatasetId];
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
		const objDs = prevState[strDatasetId];
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
		const objDs = prevState[strDatasetId];
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
			let arrRecords = JSON.parse(JSON.stringify(this.records));
			const arrOrgRecs = this.orgrecords;

			if (strRowType !== null && (strRowType === newScrmObj.constants.rowtype.CREATE_OR_UPDATE)) arrRecords = arrRecords.filter((item:any) => item.rowtype === newScrmObj.constants.rowtype.CREATE || item.rowtype === newScrmObj.constants.rowtype.UPDATE);
			else if (strRowType !== null) arrRecords = arrRecords.filter((item:any) => item.rowtype === strRowType);
			
			for (let idxA = 0; idxA < arrRecords.length; idxA++) {
				for (let idxB = 0; idxB < arrOrgRecs.length; idxB++) {
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
			let blnModified = false;
			this.records[index][column] = value;
			if (this.records[index].rowtype !== newScrmObj.constants.rowtype.CREATE && this.records[index].rowtype !== newScrmObj.constants.rowtype.DESTROY) {
				const recid = this.records[index].recid;
				const arrCol = Object.keys(this.header);
				for (let idxA = 0; idxA < this.orgrecords.length; idxA++) {
					if (this.orgrecords[idxA].recid === recid) {
						for (let idxB = 0; idxB < arrCol.length; idxB++) {
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
			const index = this.indexOf("recid", recid);
			this.records[index][column] = value;
			if (this.records[index].rowtype !== newScrmObj.constants.rowtype.CREATE && this.records[index].rowtype !== newScrmObj.constants.rowtype.DESTROY) {
				for (let idx = 0; idx < this.orgrecords.length; idx++) {
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
			let index = -1;
			for (let i = 0; i < this.records.length; i++) {
				if (this.records[i][column] === value) {
					index = i;
					break;
				}
			}
			return index;
		},
		lastIndexOf: function(column: string, value: string | number) {
			let index = -1;
			for (let i = this.records.length; i >=0; i--) {
				if (this.records[i][column] === value) {
					index = i;
					break;``
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
			const record = this.findFirst(column, value);
			return record === undefined ? undefined : record[target];
		},
		isUpdated: function() {
			if (this.records.filter(obj => obj.rowtype !== newScrmObj.constants.rowtype.READ).length > 0) return true;
			else return false;
		},
		initialize: function(records:records_tp[]) {
			for (let idx = 0; idx < records.length; idx++) {
				if (!records[idx].prototype.hasOwnProperty.call(records[idx], "recid")) records[idx].recid = idx + 1;
				if (!records[idx].prototype.hasOwnProperty.call(records[idx], "rowtype")) records[idx].rowtype = newScrmObj.constants.rowtype.READ;
			}
			if (records.length > 0) {
				const arrCol = Object.keys(records[0]);
				for (let idx = 0; idx < arrCol.length; idx++) {
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


class TransManager {
	id: string;
	url: string;
	callback: (...args: any[]) => void;
	erorr: null;
	timeout: number;
	asyncdata: null;
	dataType: string;
	contentType: string;
	progress: boolean;
	constants: { 
		url: { 
			common: string; 
			upload: string; 
		}; 
		errorcode: { 
			SUCCESS: string; 
			ERROR: string; 
			UPLOADFAIL: string; 
		}; 
		crudh: { 
			create: string; 
			read: string; 
			update: string; 
			destroy: string; 
			procedure: string; 
			handle: string; 
			sequence: string; 
			iterator: string; 
			batch: string; 
			dir: string; 
			passwd: string; 
			interface: string; 
			dataset: string; 
		}; 
		dao: { 
			base: string; 
		}; 
		config: { 
			dao: string; 
			crudh: string; 
			sqlmapid: string; 
			datasetsend: string; 
			datasetrecv: string; 
			columnid: string; 
			retry: number; 
		}; 
		accessToken: string; 
		contentType: { 
			upload: string; 
			json: string; 
			javascript: string; 
		}; 
		noProgressbar: boolean; 
	};
	transdata: { 
		epytwor: any; 
		gifnoc: {
			dao: string;
			crudh: string;
			sqlmapid: string;
			datasetsend: string;
			datasetrecv: string;
			columnid: string;
			retry: number;
		}[]; 
		datasets: records_tp; 
		reyolpme: { 
			CENT_CD: string; 
			TEAM_CD: string; 
			USR_CD: string; 
			AUTH_LV: string; 
			CONN_IP: string; 
		}; 
		noisivid: any; 
	};
	datatype: { 
		html: string; 
		json: string; 
		script: string; 
		xml: string; 
	};

	constructor() {
		this.id = '';
		this.url = '';
		this.callback = () => {return;};
		this.erorr = null;
		this.timeout = (1000 * 30);
		this.asyncdata = null;
		this.dataType = 'json';
		this.contentType = 'application/json';
		this.progress = true;
		this.constants = {
			url: {
				common: '/json.service.do',
				upload: '/upload.service.do',
			},
			errorcode: {
				SUCCESS: '0',
				ERROR: '-2',
				UPLOADFAIL: '-3'
			},
			crudh: {
				create: '0',
				read: '1',
				update: '2',
				destroy: '3',
				procedure: '4',
				handle: '5',
				sequence: '6',
				iterator: '7',
				batch: '8',
				dir: '9',
				passwd: '10',
				interface: '11',
				dataset: 'ds_config'
			},
			dao: {
				base: '0'
			},
			config: {
				dao: '',
				crudh: '',
				sqlmapid: '',
				datasetsend: '',
				datasetrecv: '',
				columnid: '',
				retry: 0
			},
			accessToken: '',
			contentType: {
				upload: 'multipart/form-data',
				json: 'application/json',
				javascript : 'application/json'
			},
			noProgressbar : false
		};
		this.transdata = {
			epytwor: newScrmObj.constants.crud,
			gifnoc: [],
			datasets: {},
			reyolpme: { "CENT_CD": "", "TEAM_CD": "", "USR_CD" : "", "AUTH_LV": "", "CONN_IP": "" },
			noisivid: ComLib.getSession("SYSTEM_DV"),
		};
		this.datatype = {
			html: 'html',
			json: 'json',
			script: 'script',
			xml: 'xml'
		};
	}
	initialize = () => {
		this.transdata.epytwor = newScrmObj.constants.crud;
		this.transdata.gifnoc = [];
		this.transdata.reyolpme = { "CENT_CD": "", "TEAM_CD": "", "USR_CD" : "", "AUTH_LV": "", "CONN_IP": "" };
		this.transdata.datasets = {};
		this.setAccessToken(ComLib.getSession('accessToken'));
	}
	setReyolpme = () => {
		let reyolpme = this.transdata.reyolpme;
		if (sessionStorage.getItem("gdsUserInfo") !== null) {
			const arrUser = ComLib.getSession("gdsUserInfo");
			reyolpme = {
				"CENT_CD": arrUser[0]["CENT_CD"],
				"TEAM_CD": arrUser[0]["TEAM_CD"],
				"USR_CD" : arrUser[0]["USR_CD"],
				"AUTH_LV": arrUser[0]["AUTH_LV"],
				"CONN_IP": arrUser[0]["CONN_IP"],
			};
		}
		return reyolpme;
	};
	setTransUrl = (url: string) => {
		this.url = url;
		if (this.constants.url.common === url) this.contentType = this.constants.contentType.json;
		else if (this.constants.url.upload === url) this.contentType = this.constants.contentType.upload;
	};
	setTransId = (transId: string) => {
		this.initialize();
		this.id	= transId;
		this.transdata.reyolpme = this.setReyolpme();
	};
	setCallBack = (callback: any) => {
		this.callback	= callback;
	};
	setTimeout = (timeout: number) => {
		this.timeout = timeout;
	};
	setProgress = (progress: boolean) => {
		this.progress = progress;
	};
	makeTransData = () => {
		return { transdata: JSON.stringify(this.transdata) };
	};
	addConfig = (props: any) => {
		this.transdata.gifnoc.push(_.assign({}, this.constants.config, props));
	};
	addDataset = (name: string, dataset: any) => {
		this.transdata.datasets[name] = dataset;
	};
	addSequence = (props: any) => {
		this.addConfig( _.assign(props, { crudh: this.constants.crudh.sequence }));
	};
	addIterator = (props: any) => {
		this.addConfig( _.assign(props, { crudh: this.constants.crudh.iterator }));
	};
	addSendDataset = (name: string, dataset: any) => {
		this.transdata.datasets[name] = dataset;
	};
	setAccessToken = (token: string) => {
		this.constants.accessToken = token;
	};
	setProgressBar = (bln: boolean) => {
		this.constants.noProgressbar = bln;
	}
	replcaceSpChar = (data: string) => {
		return data.replace(/%/g, '％').replace(/=/g, '＝').replace(/&amp;/g, '＆').replace(/&/g, '＆');
	};
	doLoading = (bVisible: boolean) => {
		let objLoadDiv = document.getElementById(newScrmObj.constants.mdi.LOADING);
		if (objLoadDiv === null) {
			objLoadDiv = document.createElement("div");
			objLoadDiv.id = newScrmObj.constants.mdi.LOADING;
		}
		document.body.appendChild(objLoadDiv);
		// ReactDOM.render(<ModalLoading isOpen = {bVisible}/>, objLoadDiv);
		// ModalLoading 추가 필요 Dialog
	};
	agent = () => {
		console.log('request => ');
		console.log(this.transdata);
		if (!this.constants.noProgressbar) {
			loadProgressBar();
			if (this.progress) this.doLoading(this.progress);
		}
		else this.agentAsync();
	};	
	agentAsync = async() => {
		const reqOptions = {
			method: 'post',
			//url: process.env.API_URL + this.url,
			url: ComLib.getSession("SVR_URL") + this.url,
			data: this.contentType === this.constants.contentType.json ? this.replcaceSpChar(JSON.stringify({"transdata": this.transdata})) : this.transdata.datasets.fileupload,
			headers: {
				"Content-Type": this.contentType,
				"Authorization": this.constants.accessToken
			},
			json: true,
			retry: 0,
			progress: this.progress,
			timeout: this.timeout,
		};
		try {
			const resData = await axios(reqOptions);
			console.log('response => ');
			console.log(resData);
			
			if (!this.constants.noProgressbar) { 
				if (this.progress) this.doLoading(!this.progress);
			}

			if (resData.data.gifnoc.ERR_CODE === this.constants.errorcode.SUCCESS) {
				if ( this.callback !== null ) {
					return this.callback({ id: this.id, data: resData.data, result: this.constants.errorcode.SUCCESS });
				} else {
					return resData;
				}
			} else if (resData.data.data.gifnoc.ERR_CODE === this.constants.errorcode.UPLOADFAIL) {
				if ( this.callback !== null) {
					return this.callback({ id: this.id, data: resData.data, result: this.constants.errorcode.UPLOADFAIL });
				}
			} else {
				ComLib.openDialog('A', 'SYSI0010', resData.data.gifnoc.ERR_MESSAGE);
			}
		} catch (err) {
			console.log('catch => ');
			console.log(err);
			if (!this.constants.noProgressbar) { 
				if (this.progress) this.doLoading(!this.progress);
			}
			ComLib.openDialog('A', 'SYSI0010', '서버 오류 발생\n로그를 확인하십시오.');
		}
	}
}

export {ComLib, DataLib, useStateWithDataSet, TransManager};