import React, { useRef } from 'react';
import { sh_chk_pt, sh_evnt_return, sh_multi_chk_pt } from '../TypeInterfaces';

export const Checkbox =({size="md",id,disabled,checked,value,onChange,onClick,color="black"}:sh_chk_pt) => { 
	let checkBoxRef = useRef<HTMLInputElement>(null);

	const onClickHandler = (e:React.MouseEvent) => {
		const target = e.target as HTMLInputElement;
		onClick({id: id, target : target, checked : target.checked });
	}
	const onChangeHandler = (e:React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		onChange({id: id, target : target, checked : target.checked });
	}

	return (
		<div className={"sh-checkbox-div"}>
			<input	
				id       = {id}
				key      = {"key_" + id + "_checkbox"}
				ref      = {checkBoxRef} 
				name     = {id}
				type     = {"checkbox"}
				disabled = {disabled}
				className= {"sh-input-checkbox-input " + size + " color-" + color}
				checked = {checked}
				onClick = {onClickHandler}
				onChange= {onChangeHandler}
			/>
			<label 
				key       = {"key_" + id + "_labal"}
				className = {"sh-input-checkbox-label " + size + " color-" + color} 
				onClick= {(e) => {e.stopPropagation(); checkBoxRef.current?.click()}}
			> 
				{value} 				
			</label>
		</div>	
	);
}


export const MultiCheckBox =({size="md",id,disabled,onChange,onClick,dataset,color="black"}:sh_multi_chk_pt) => { 
	const onClickHandler = (e:sh_evnt_return) => {
		const target = e.target as HTMLInputElement;
		onClick({id: id, target: target, key: target.id, checked : target.checked});
	}
	const onChangeHandler = (e:sh_evnt_return) => {
		const target = e.target as HTMLInputElement;
		onChange({id: id, target: target, key: target.id, checked : target.checked });
	}
	return (
		<React.Fragment>
		{			
			dataset?.map(({cd, nm, checked}) => {
				return (
					<Checkbox
						id       = {cd}
						key      = {cd}
						value    = {nm}
						size     = {size}
						color    = {color}
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

