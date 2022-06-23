import React from 'react';
import { sh_sel_pt } from '../TypeInterfaces';

export const SelectBox =({id,disabled,onChange,width,dataset,color}:sh_sel_pt) => { 
	const onChangeHandler = (e:React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;
		let key = "";
		for (let i = 0; i < dataset.length; i ++) {
			if (dataset[i].cd === target.value) {
				key = dataset[i].cd;
				break;
			}
		}
		onChange({target : target, id : id, key: key});
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
						return (<option value={data.cd} key={data.cd + '_' + key} >{data.nm}</option>);
					})
				}
			</select>
		</div>
	);
}
