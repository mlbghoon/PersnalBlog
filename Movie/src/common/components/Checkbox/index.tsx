import React from 'react';
import { sh_chk_evnt_return, sh_chk_props_default, sh_chk_props_type, sh_multi_chk_props_type } from '../TypeInterfaces';

export const Checkbox =({id,keyProp,disabled,checked,value,onChange,onClick }:sh_chk_props_type & typeof sh_chk_props_default) => { 
	const onClickHandler = (e:React.MouseEvent) => {
		const target = e.target as HTMLInputElement;
		onClick({id: id, target : target, key: target.value, checked : target.checked });
	}
	const onChangeHandler = (e:React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		onChange({id: id, target : target, key: target.value, checked : target.checked });
	}

	return (
		<div 
			className= {"sh-input-checkbox-div"}
		>
			<input	
				id       = {id}
				key      = {"key_" + id + "_checkbox_" + keyProp}
				name     = {id}
				type     = {"checkbox"}
				value    = {keyProp}
				disabled = {disabled}
				className= {"sh-input-checkbox-input"}
				checked = {checked}
				onClick = {onClickHandler}
				onChange= {onChangeHandler}
			/>
			<label 
				key       = {"key_" + id + "_labal_" + keyProp}
				htmlFor   = {"chk_" + id + "_" + keyProp} 
				className = {"sh-input-checkbox-label"} 
			> 
				{value} 
			</label>
		</div>
	);
}
Checkbox.defaultProps = sh_chk_props_default;


export const MultiCheckBox =({id,disabled,onChange,onClick, dataset }:sh_multi_chk_props_type & typeof sh_chk_props_default) => { 
	const onClickHandler = (e:sh_chk_evnt_return) => {
		const target = e.target;
		onClick({id: id, target: target, key: target.value, checked : target.checked});
	}
	const onChangeHandler = (e:sh_chk_evnt_return) => {
		const target = e.target;
		onChange({id: id, target: target, key: target.value, checked : target.checked });
	}
	return (
		<React.Fragment>
		{			
			dataset?.map(({keyProp, value, checked}, i) => {
				return (
					<Checkbox
						id       = {id + "_" + i}
						key      = {'checkbox_' + id + "_"+ i}
						value    = {value}
						keyProp  = {keyProp}
						checked  = {checked}
						disabled = {disabled}
						onChange = {onChangeHandler}
						onClick  = {onClickHandler}
					/>
				)
			})
		}
		</React.Fragment>
	);
}
MultiCheckBox.defaultProps = sh_chk_props_default;
