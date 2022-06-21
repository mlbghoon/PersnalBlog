import React from 'react';
import { sh_sel_props_default, sh_sel_props_type } from '../TypeInterfaces';

export const SelectBox =({id,disabled,onChange,width,dataset,color}:sh_sel_props_type & typeof sh_sel_props_default) => { 
	const onChangeHandler = (e:React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;

		onChange({target : target, id : id});
	}

	return (
		<div className="sh-select-div" style={{width : width}}>
			<select
				id = {id}
				disabled = {disabled}
				className={ "sh-selectbox " + color}
				onChange = {onChangeHandler}
			> 
				{
					dataset.map((data, key) => {
						return (<option value={data.value} key={data.value + '_' + key} >{data.name}</option>);
					})
				}
			</select>
		</div>
	);
}
SelectBox.defaultProps = sh_sel_props_default;
