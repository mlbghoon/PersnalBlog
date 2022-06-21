export interface sh_btn_props_type {
	id   : string;
    mt   : string;
	mr   : string;
	mb   : string;
	ml   : string;
	icon : string;
    size : string;
	value: string;
    color: string;

	filled     : boolean;
	hidden     : boolean;
	disabled   : boolean;
	innerImage : boolean;
	onlyDisplay: boolean;

	onClick    : (e:sh_btn_evnt_return) => void;
};

export const sh_btn_props_default = {	
	mt   : "0px",
	mr   : "0px",
	mb   : "0px",
	ml   : "0px",
	icon : "",
    size : "md",
	value: "",
    color: "tomato",

	filled     : true,
	hidden     : false,
	disabled   : false,
	innerImage : false,
	onlyDisplay: false
};

export interface sh_btn_evnt_return {	
	id    : string;   
	target: HTMLButtonElement;
};

export interface sh_ipt_props_type {
	id         : string; 
	mt         : string; 
	mr         : string; 
	mb         : string; 
	ml         : string; 
	type       : string;
	size       : string; 
	color      : string; 
	value      : string; 
	width      : string;
	placeholder: string; 
    
	minLength: number; 
	maxLength: number; 	

    tooltip      : boolean; 
	disabled     : boolean; 
	readOnly     : boolean; 
	alertEmpty   : boolean; 
	focusOnRender: boolean; 

	onChange  : (e:sh_ipt_event_return) => void;
	onKeyPress: (e:sh_ipt_event_return) => void;
	onKeyUp   : (e:sh_ipt_event_return) => void;
	onBlur    : (e:sh_ipt_event_return) => void;
};

export const sh_ipt_props_default = {
	mt         : "0px",
	mr         : "0px",
	mb         : "0px",
	ml         : "0px",
	type       : "",
	size       : "",
	color      : "",
	value      : "",
	width      : "",
	placeholder: "",

	minLength: 1,
	maxLength: 100,	

    tooltip      : false,
	disabled     : false, 
	readOnly     : false, 
	alertEmpty   : false,
	focusOnRender: false,

	onKeyPress: (e:sh_ipt_event_return) => {return;},
	onKeyUp   : (e:sh_ipt_event_return) => {return;},
	onBlur    : (e:sh_ipt_event_return) => {return;},
	
};

export interface sh_ipt_event_return {	
	id    : string;   
	target: HTMLInputElement;
	key?  : string;
	code? : string;
	type? : string;
};

export interface sh_chk_props_type {
	id     : string;
	value  : string;
	keyProp: string;
	checked : boolean;
	disabled: boolean;
	onClick : (arg: sh_chk_evnt_return) => void;
	onChange: (arg: sh_chk_evnt_return) => void;
};

export interface sh_multi_chk_props_type {
	id     : string;
	disabled: boolean;
	onClick : (arg: sh_chk_evnt_return) => void;
	onChange: (arg: sh_chk_evnt_return) => void;
	dataset :{keyProp: string, value: string, checked: boolean}[]	
};

export interface sh_chk_evnt_return {
	id     : string;
	key    : string; 
	target : HTMLInputElement; 
	checked: boolean; 
}

export const sh_chk_props_default = {
	checked : false,
	disabled: false,
	onClick : (arg: sh_chk_evnt_return) => {return;}
};


export interface sh_rdo_props_type {
	id     : string;
	onClick : (arg: sh_rdo_evnt_return) => void;
	onChange: (arg: sh_rdo_evnt_return) => void;
	dataset :{keyProp: string, value: string}[]	
	selected: string | null

}

export const sh_rdo_props_default = {
	readOnly: false,
	disabled: false,
	width   : 200,
	defaultSelected: 1,
	perRow : 1,
	onClick : (arg: sh_rdo_evnt_return) => {return;}
}

export interface sh_rdo_evnt_return {
	id     : string;
	key    : string; 
	target : HTMLInputElement; 
	checked: boolean; 
}


export interface sh_label_props_type {
	value: string
}

export const sh_label_props_default = {
	color : 'black',
	mt    : "0px",
	mr    : "0px",
	mb    : "0px",
	ml    : "0px",
	req   : false
}



export interface sh_Table_props_type {
	id     : string
	colGrp : {width : string}[]
	tbData : {type  : string, value: React.ReactNode, colSpan?: number, rowSpan?: number}[][]
	head   : React.ReactNode | null
	footer : React.ReactNode | null

}

export const sh_Table_props_default = {
	width: "100%"
}
