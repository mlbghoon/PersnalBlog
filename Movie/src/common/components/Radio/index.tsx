import React from 'react';
import { sh_rdo_props_default, sh_rdo_props_type } from '../TypeInterfaces';

export const Radio =({id,readOnly,disabled,onChange,onClick,width,dataset, defaultSelected, selected}:sh_rdo_props_type & typeof sh_rdo_props_default) => { 
	const onChangeHandler = (e:React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		let key = "";
		for (let i = 0; i < dataset.length; i ++) {
			if (dataset[i].value === target.value) {
				key = dataset[i].keyProp;
				break;
			}
		}
		
		onChange({id: id, target : target, key: key, checked: target.checked });
		
	}
	const onClickHandler = (e:React.MouseEvent) => {
		const target = e.target as HTMLInputElement;
		let key = "";
		for (let i = 0; i < dataset.length; i ++) {
			if (dataset[i].value === target.value) {
				key = dataset[i].keyProp;
				break;
			}
		}
		onClick({id: id, target : target, key: key, checked : target.checked });
	}

	return (
		<div className='scrm-input-radio-div' style={{width: width}} key = {"key_" + id + "_radio_div"}>
			{
				dataset?.map(({keyProp, value}, i) => {
					return (
						<>
							<input		
								id       = {id}
								key      = {"key_" + id + "_radio_" + keyProp}
								name     = {id}
								type     = {"radio"}
								value    = {value}
								checked  = {(selected === null)
									? defaultSelected === i
									: selected === keyProp}					
								readOnly = {readOnly}
								disabled = {disabled}
								className ='scrm-input-radio-input'
								onChange = {onChangeHandler}
								onClick  = {onClickHandler}
							/>
							<label	
								key       = {"key_" + id + "_labal_" + keyProp}
								className ='scrm-input-radio-label'
								htmlFor={id}
							>
								{value}
							</label>	
						</>
					)
				})
			}
		</div>
	);
}
Radio.defaultProps = sh_rdo_props_default;
