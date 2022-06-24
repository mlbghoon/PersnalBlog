
interface html_base_pt {
	id       : string;
    margin?  : string;
	disabled?: boolean;
}

export interface sh_evnt_return {	
	id      : string;   
	target  : HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
	key?    : string;
	code?   : string;
	type?   : string;
	checked?: boolean; 
};

export interface sh_btn_pt extends html_base_pt {	
	icon?   : string;
    size?   : string;
	value?  : string;
    color?  : string;
	filled? : boolean;
	onClick : (e:sh_evnt_return) => void;
};

export interface sh_ipt_pt extends html_base_pt {
	type?       : string;
	size?       : string; 
	color?      : string; 
	value       : string; 
	width?      : string;
	placeholder?: string;     
	minLength?: number; 
	maxLength?: number; 	
    tooltip?      : boolean; 
	readOnly?     : boolean; 
	alertEmpty?   : boolean; 
	focusOnRender?: boolean; 
	onChange   : (e:sh_evnt_return) => void;
	onKeyPress?: (e:sh_evnt_return) => void;
	onKeyUp?   : (e:sh_evnt_return) => void;
	onBlur?    : (e:sh_evnt_return) => void;
};


export interface sh_label_pt {
	color? : string;
	size?  : string;
	value  : string;
	margin?: string;
	req?   : boolean;
}

export interface sh_rdo_pt extends html_base_pt {
	onClick?: (e: sh_evnt_return) => void;
	onChange: (e: sh_evnt_return) => void;
	dataset :{cd: string, nm: string}[];
	selected: string | null;	
	readOnly?: false,
	width?   : number,
	perRow?  : number,
	defaultSelected?: number,
}


export interface sh_sel_pt extends html_base_pt {
	dataset: {cd: string, nm: string}[];
	onChange: (arg: sh_evnt_return) => void;
	width?:  string;
	color?:  string;
}

export interface sh_chk_pt extends html_base_pt {
	size?  : string;
	value  : string;
	color? : string;
	checked : boolean;
	onClick : (arg: sh_evnt_return) => void;
	onChange: (arg: sh_evnt_return) => void;
};

export interface sh_multi_chk_pt extends html_base_pt {
	size?    : string;
	color?   : string;
	onClick  : (arg: sh_evnt_return) => void;
	onChange : (arg: sh_evnt_return) => void;
	dataset  :{cd: string, nm: string, checked: boolean}[]	
};

export interface sh_switch_pt extends html_base_pt {
	checked: boolean;
	onChange: (arg: sh_evnt_return) => void;
}

export interface sh_Table_pt {
	colGrp : {width : string}[];
	tbData : {type  : string, value: React.ReactNode, colSpan?: number, rowSpan?: number, req?:boolean}[][];
	head?  : React.ReactNode;
	footer?: React.ReactNode;
	width? : string;
}

export interface sh_textarea_pt extends html_base_pt {
	type?       : string;
	color?      : string;
	value       : string;
	width?      : string;
	placeholder?: string;
	size?       : string;
	rows      : number;
	minLength?: number;
	maxLength?: number;
    tooltip?      : boolean;
	readOnly?     : boolean; 
	alertEmpty?   : boolean;
	focusOnRender?: boolean;
	resize?       : boolean;
	onKeyPress?: (e:sh_evnt_return) => void;
	onKeyUp?   : (e:sh_evnt_return) => void;
	onBlur?    : (e:sh_evnt_return) => void;
    onChange   : (e:sh_evnt_return) => void;
};

