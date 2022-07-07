import { sh_Table_pt, sh_tbl_data_pt } from '../TypeInterfaces';

export const Table =({colGrp,tbData,head,footer,width}:sh_Table_pt) => { 
	const setColGroup = (colGrp: Array<{ width: string }>) => {	
		return colGrp.map((colGrp, index) => {
			return (<col key={'col_' + index} style={{width: colGrp.width}}></col>)
		});		
	}

	const setBody = (tbData: Array<sh_tbl_data_pt>) => {
		return tbData.map((colArray, index) => {
			return (<tr key={'tr_' + index}>{setColumn(colArray)}</tr>)
		});
		
	}

	const setColumn = (colArray: sh_tbl_data_pt) => {
		return colArray.map((colJson, index) => {
			let th = 'sh-table-th';
			if (colJson.req) {
				th  += " req";
			}
			return (
			  (colJson.type === 'T') ?  <th className={th} key={'cobody_' + index} colSpan = {colJson.colSpan} rowSpan = {colJson.rowSpan}>{colJson.value}</th>
									 :  <td className='sh-table-td' key={'cobody_' + index} colSpan = {colJson.colSpan} rowSpan = {colJson.rowSpan}>{colJson.value}</td>
			)
		});
	}
	return (
		<table className = 'sh-table' style={{width: width}}>
			<colgroup>
				{ setColGroup(colGrp) }
			</colgroup>
			{ (head) ? <thead>{head}</thead> : <thead/> }
			<tbody>
				{ setBody(tbData) }
			</tbody>
			{ (footer) ? <tfoot>{footer}</tfoot> : <tfoot></tfoot> }
		</table>
	);
}
