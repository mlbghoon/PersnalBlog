import React from 'react';
import { sh_chk_props_default, sh_chk_props_type } from '../TypeInterfaces';

export const Checkbox =({id,index,keyProp,readOnly,checked,value,onChange,onClick }:sh_chk_props_type & typeof sh_chk_props_default) => { 
	const onClickHandler = (e:React.MouseEvent) => {
		onClick({id: id, target : e.target as HTMLInputElement, index : index, checked : (e.target as HTMLInputElement).checked });
	}
	const onChangeHandler = (e:React.ChangeEvent) => {
		onChange({id: id, target : e.target as HTMLInputElement, index : index, checked : (e.target as HTMLInputElement).checked });
	}

	return (
		<div 
			className= {"sh-input-checkbox-div"}
		>
			<input	
				id       = {"chk_" + id + "_" + index + "_" + keyProp}
				key      = {"key_" + id + "_checkbox_" + keyProp}
				name     = {id}
				type     = {"checkbox"}
				value    = {keyProp}
				readOnly = {readOnly}
				className= {"sh-input-checkbox-input"}
				checked = {checked}
				onClick = {onClickHandler}
				onChange= {onChangeHandler}
			/>
			<label 
				key       = {"key_" + id + "_labal_" + keyProp}
				htmlFor   = {"chk_" + id + "_" + index + "_" + keyProp} 
				className = {"sh-input-checkbox-label"} 
			> 
				{value} 
			</label>
		</div>
	);
}
Checkbox.defaultProps = sh_chk_props_default;