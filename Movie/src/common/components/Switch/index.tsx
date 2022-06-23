import { sh_switch_pt } from '../TypeInterfaces';

export const Switch =({id, onChange, checked}:sh_switch_pt) => { 
	const onChangeHandler = (e:React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		onChange({id: id, target : target});
		
	}
	
	return (
		<label className="sh-switch-label">
			<input className="sh-switch-input" id={id} type="checkbox" onChange ={onChangeHandler} checked = {checked}/>
			<span className="sh-switch-span"/>
		</label>
	);
}

