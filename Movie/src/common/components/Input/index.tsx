import React, { useEffect, useRef } from 'react';
import { sh_ipt_props_default, sh_ipt_props_type } from '../TypeInterfaces';

export const Input =({ alertEmpty,type,id,mt,mr,mb,ml,disabled,readOnly,width,size,color,value,placeholder,minLength,maxLength,onChange,onKeyPress,onBlur,onKeyUp,focusOnRender }:sh_ipt_props_type & typeof sh_ipt_props_default) => { 
	let inputRef = useRef<HTMLInputElement>(null);
	let strMargin = mt + "" + mr + "" + mb + "" + ml;

	useEffect(() => {
		if (focusOnRender) {
			inputRef.current?.focus();	
		}
	}, []);
	
	const rtnVal = (value:string) => {		
		if (type !== undefined) {
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
	
	let inputDIvClass = "sh-input-div";
	let inputClass = "";

	if (alertEmpty) {
		if (value === "") {
			inputClass += "border_red ";

		}

	} 

	const onChangeHandler = (e:React.ChangeEvent) => {
		onChange({id: id, target : e.target as HTMLInputElement});
		
	}

	const onKeyPressHandler = (e:React.KeyboardEvent) => {
		onKeyPress({id: id, target : e.target as HTMLInputElement, key: e.key, code: e.code});
	
	}

	const onKeyUpHandler = (e:React.KeyboardEvent) => {
		onKeyUp({id: id, target : e.target as HTMLInputElement, key: e.key, code: e.code});
	
	}

	const onBlurHandler = (e:React.FocusEvent) => {
		onBlur({id: id, target : e.target as HTMLInputElement, type: e.type});

	}


	return (
		<div 
			className= {inputDIvClass} 
			style    = {{width: width, margin: strMargin}}
		>
			<input	
				id          = {id}
				type        = {"text"}
				value       = {rtnVal(value)}
				readOnly    = {readOnly}
				disabled    = {disabled}
				className   = {inputClass + (size === 'h1' ? "sh-input-h1" : "")}
				minLength   = {minLength}
				maxLength   = {maxLength}
				placeholder = {placeholder}
				autoComplete= {"off"}
				onChange  = {onChangeHandler}
				onKeyDown = {onKeyPressHandler}
				onKeyUp   = {onKeyUpHandler}
				onBlur    = {onBlurHandler}
				ref= {inputRef} 
			/>
		</div>
	);
}
Input.defaultProps = sh_ipt_props_default;