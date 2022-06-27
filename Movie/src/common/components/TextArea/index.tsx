import React, { useEffect, useRef } from 'react';
import { sh_evnt_return, sh_textarea_pt } from '../TypeInterfaces';

export const TextArea =({color="black", size="md",margin,alertEmpty,rows,type,id,disabled,readOnly,width,value,placeholder,minLength,maxLength,onChange,onKeyPress=(e:sh_evnt_return)=>{return;},onBlur=(e:sh_evnt_return)=>{return;},onKeyUp=(e:sh_evnt_return)=>{return;},focusOnRender,resize=false }:sh_textarea_pt) => { 
	let inputRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (focusOnRender) {
			inputRef.current?.focus();	
		}
	}, [focusOnRender]);

	let inputClass = "";

	if (alertEmpty) {
		if (value === "") {
			inputClass += " border_red";

		}

	} 

	const rtnVal = (value:string) => {		
		if (type) {
			switch (type) {
			case 'onlyNum' :
				return value.replace(/[^0-9]/g,"");

			case 'onlyKor' :
				return value.replace(/[a-z0-9]|[ \]{}()<>?|`~!@#$%^&*-_+=,.;:'\\]/g,"");

			case 'onlyEng' :
				return value.replace(/[^a-zA-Z]/g,"");		

			case 'engNum' :
				return value.replace(/[^a-zA-Z0-9]/g,"");

			default :
				return value;
			}
		} else {
			return value;
		}	
	}
	
	const onChangeHandler = (e:React.ChangeEvent) => {
		onChange({id: id, target : e.target as HTMLTextAreaElement});
		
	}

	const onKeyPressHandler = (e:React.KeyboardEvent) => {
		onKeyPress({id: id, target : e.target as HTMLTextAreaElement, key: e.key, code: e.code});
	
	}

	const onKeyUpHandler = (e:React.KeyboardEvent) => {
		onKeyUp({id: id, target : e.target as HTMLTextAreaElement, key: e.key, code: e.code});
	
	}

	const onBlurHandler = (e:React.FocusEvent) => {
		onBlur({id: id, target : e.target as HTMLTextAreaElement, type: e.type});

	}


	return (
		<div className={'sh-textarea-div' + inputClass} style={{width: width, margin: margin}}>
			<textarea className={(size + " color-" + color + (resize ? "" : " no_resize"))}
				id			= {id}
				value		= {rtnVal(value)}
				placeholder	= {placeholder}
				minLength	= {minLength}
				maxLength	= {maxLength}
				readOnly	= {readOnly}
				disabled	= {disabled}
				rows		= {rows}
				onChange	= {onChangeHandler}
				onKeyPress	= {onKeyPressHandler}
				onKeyUp   	= {onKeyUpHandler}
				onBlur   	= {onBlurHandler}
			/>
		</div>
	);
}
