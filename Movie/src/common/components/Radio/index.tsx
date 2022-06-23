import React from 'react';
import { Table } from '../Table';
import { sh_evnt_return, sh_rdo_pt } from '../TypeInterfaces';

export const Radio =({id,readOnly,disabled,onChange,onClick=(e:sh_evnt_return)=>{return;},width,dataset,defaultSelected,selected,perRow=1}:sh_rdo_pt) => { 
	const onChangeHandler = (e:React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		let key = "";
		for (let i = 0; i < dataset.length; i ++) {
			if (dataset[i].cd === target.value) {
				key = dataset[i].cd;
				break;
			}
		}
		
		onChange({id: id, target : target, key: key, checked: target.checked });
		
	}
	const onClickHandler = (e:React.MouseEvent) => {
		const target = e.target as HTMLInputElement;
		let key = "";
		for (let i = 0; i < dataset.length; i ++) {
			if (dataset[i].cd === target.value) {
				key = dataset[i].cd;
				break;
			}
		}
		onClick({id: id, target : target, key: key, checked : target.checked });
	}



	const setRadio = () => {
		let colGrp = [];

		if (perRow === 1) {
			colGrp = [{ width: '100%' }];

		} else if (perRow === 2) {
			colGrp = [{ width: '50%' }, { width: '50%' }];

		} else if (perRow === 3) {
			colGrp = [{ width: '33%' }, { width: '33%' }, { width: '33%' }];

		} else if (perRow === 4) {
			colGrp = [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }];

		} else {
			colGrp = [{ width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }, { width: '20%' }];
			
		}
	
		let tbData: any[][] = [];
		let rowData: { type: string; value: JSX.Element; }[] = [];		
		
		dataset.map((item: {cd: string, nm: string}, i) => {			
			rowData.push({ type: 'D', value: <div key={'radio_div_' + i} className ='sh-input-radio-div'>								
								<input	
									id       = {id + "_radio_" + item.cd}
									key      = {"key_" + id + "_radio_" + item.cd}
									name     = {id}
									type     = {"radio"}
									value    = {item.cd}
									checked  = {(selected === null)
										? defaultSelected === i
										: selected === item.cd}					
									readOnly = {readOnly}
									disabled = {disabled}
									className ='sh-input-radio-input'
									onChange = {onChangeHandler}
									onClick  = {onClickHandler}
								/>
								<label	
									key       = {"key_" + id + "_labal_" + item.cd}
									className ='sh-input-radio-label'
									htmlFor={id + "_radio_" + item.cd}
								>
									{item.nm}
								</label>	
							</div>
					})
			if ((i+1)%perRow === 0) {
				tbData.push(rowData)
				rowData = [];
			} else if (i === dataset.length - 1) {
				tbData.push(rowData)
			}
			return null;
		})

		return (
			<Table
				colGrp={colGrp}
				tbData={tbData} 
			/>
		);
	}


	return (
		<div style={{width: width}}>
			{setRadio() }
		</div>
	);
}
