import { sh_label_props_default, sh_label_props_type } from '../TypeInterfaces';

export const Label =({color,value,req,mt,mr,mb,ml,}:sh_label_props_type & typeof sh_label_props_default) => { 
	let strMargin = mt + "" + mr + "" + mb + "" + ml;
	
	return (
		<div className="sh-label-div" style={{margin: strMargin}}>					
			<span style={{color : color}}>{value}</span>
			{
				(req)
				? <span style={{color : 'red'}}>{'*'}</span>
				: null
			}
		</div>
	);
}
Label.defaultProps = sh_label_props_default;
