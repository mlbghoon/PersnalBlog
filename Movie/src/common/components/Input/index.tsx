import React, { useEffect, useRef } from 'react';
import { sh_evnt_return, sh_ipt_pt } from '../TypeInterfaces';

export const Input =({alertEmpty,type,id,margin,disabled=false,readOnly,width="99%",size="md",color="black",value,placeholder,minLength,maxLength,onChange,onKeyPress=(e:sh_evnt_return)=>{return;},onBlur=(e:sh_evnt_return)=>{return;},onKeyUp=(e:sh_evnt_return)=>{return;},focusOnRender=false}:sh_ipt_pt) => { 
	const inputRef = useRef<HTMLInputElement>(null);	

	useEffect(() => {
		if (focusOnRender) {
			inputRef.current?.focus();	
		}
	}, [focusOnRender]);
	
	const rtnVal = (value:string) => {		
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
	}
	
	const inputDIvClass = "sh-input-div " + size;
	let inputClass = size + " color-" + color;

	if (alertEmpty) {
		if (value === "") {
			inputClass += " border_red ";

		}

	} 
	const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
		const target: HTMLInputElement = e.currentTarget;
	
		onChange({id: id, target : target});
	}

	const onKeyPressHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {		
		const target: HTMLInputElement = e.currentTarget;
	
		onKeyPress({id: id, target : target, key: e.key, code: e.code});
	}

	const onKeyUpHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
		const target: HTMLInputElement = e.currentTarget;
	
		onKeyUp({id: id, target : target, key: e.key, code: e.code});	
	}

	const onBlurHandler = (e:React.FocusEvent<HTMLInputElement>) => {
		const target: HTMLInputElement = e.currentTarget;
	
		onBlur({id: id, target : target, type: e.type});
	}


	return (
		<div 
			className= {inputDIvClass} 
			style    = {{width: width, margin: margin}}
		>
			<input	
				id          = {id}
				ref         = {inputRef} 
				type        = {"text"}
				value       = {rtnVal(value)}
				readOnly    = {readOnly}
				disabled    = {disabled}
				className   = {inputClass}
				minLength   = {minLength}
				maxLength   = {maxLength}
				placeholder = {placeholder}
				autoComplete= {"off"}
				onChange  = {onChangeHandler}
				onKeyDown = {onKeyPressHandler}
				onKeyUp   = {onKeyUpHandler}
				onBlur    = {onBlurHandler}
			/>
		</div>
	);
}