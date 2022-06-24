import { sh_label_pt } from '../TypeInterfaces';

export const Label =({color="black",size="md",value,req,margin}:sh_label_pt) => { 
	return (
		<div className={"sh-label-div " + size} style={{margin: margin}}>					
			<span style={{color : color}} className={size}>
				{value}
				{
					(req)
					? <span style={{color : 'red'}}>{'*'}</span>
					: null
				}
			</span>			
		</div>
	);
}
