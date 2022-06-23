import { sh_label_pt } from '../TypeInterfaces';

export const Label =({color,value,req,margin}:sh_label_pt) => { 
	return (
		<div className="sh-label-div" style={{margin: margin}}>					
			<span style={{color : color}}>{value}</span>
			{
				(req)
				? <span style={{color : 'red'}}>{'*'}</span>
				: null
			}
		</div>
	);
}
