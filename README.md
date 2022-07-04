2022-07-04 V 1.2
================
1. footer 추가
2. Menu 추가 (추후 DB 연동)
3. DataLib, ComLib 추가 (../common/script.tsx)
4. dataset 기본구성 추가

    ```typescript
        // ../common/script.tsx
        const useStateWithDataSet = (initialState: any) => {
            const [state, setState] = useState(initialState);
            
            const initState = (strDatasetId: string, newState: any) => {
                let objDs = state[strDatasetId];
                objDs.initRecords(newState);
            
                setState({...state, [strDatasetId]: objDs});
            };
            const setStateCB = (strDatasetId: string, newState: any) => {
                let objDs = state[strDatasetId];
                objDs.setRecords(newState);
        
                setState({...state, [strDatasetId]: objDs});
            };
            const setStateValue = (strDatasetId: string, nRowIndex: number, strColumnId: string, strValue: string | number) => {
                let objDs = state[strDatasetId];
                objDs.setValue(nRowIndex, strColumnId, strValue);
            
                setState({...state, [strDatasetId]: objDs});
            }
        
            return [state, initState, setStateCB, setStateValue];
        };

        // ComponentTest.tsx
        const [dataSet, initDataset, setDataSet, setDataSetValue ] = useStateWithDataSet({ dataSetTest: DataLib.datalist.getInstance({})});  
    ```

    * custom useState 생성

    ```typescript
        type record_tp<key extends string = string>  = Record<key, string | number>;

        const DataLib = {
            ...
            datalist: {
                records: [] as record_tp[],
                orgrecords: [] as record_tp[], 
                header: {} as record_tp, 
                ...
            }
            ...
        }

    ```
    * object type 생성

### 다음목표 : 1. dataset 마무리 
