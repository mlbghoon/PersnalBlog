import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './modules/appModule'

const configure = () => {
	//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	const store = configureStore({
		reducer: {
		  reducers: combineReducers,
		}
	  })

	return store;
}

export default configure();