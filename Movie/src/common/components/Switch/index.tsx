import { sh_switch_pt } from '../TypeInterfaces';

export const Switch =({id, onChange, checked,color="aquamarine",size="md"}:sh_switch_pt) => { 
	const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
		const target: HTMLInputElement = e.target;
		onChange({id: id, target : target});
		
	}
	
	return (
		<label className={size + " sh-switch-label"}>
			<input className={size + " sh-switch-input"} id={id} type="checkbox" onChange ={onChangeHandler} checked = {checked}/>
			<span className={size + " sh-switch-span color-" + color}/>
		</label>
	);
}

