import { AgGridReact } from 'ag-grid-react';
import { Button, ComponentPanel, FullPanel, RelativePanel, SubFullPanel } from '../../common/components';
import { Grid } from '../../common/components/Grid';
import { sh_evnt_return } from '../../common/components/TypeInterfaces';

export const GridTest = (props:any) => {  


                
  return (
    <FullPanel>
      <SubFullPanel>
        <ComponentPanel>
          <Grid/>
        </ComponentPanel>
      </SubFullPanel>
    </FullPanel>
  );
}


