import React, { useEffect, useRef } from 'react';
import { sh_textarea_props_default, sh_textarea_props_type } from '../TypeInterfaces';

export const TextArea =({rows,type,id,disabled,readOnly,width,value,placeholder,minLength,maxLength,onChange,onKeyPress,onBlur,onKeyUp,focusOnRender }:sh_textarea_props_type & typeof sh_textarea_props_default) => { 
	let inputRef = useRef<HTMLInputElement>(null);

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
		<div className='scrm-textarea-div' style={{width: width}}>
			<textarea className="scrm-textarea-input"
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
TextArea.defaultProps = sh_textarea_props_default;