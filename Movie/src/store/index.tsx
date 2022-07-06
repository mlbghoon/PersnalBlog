import { configureStore } from '@reduxjs/toolkit'
import menusReducer from './modules/appModule'

const configure = () => {
	//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	const store = configureStore({
		reducer: {
		  menus: menusReducer
		}
	  })

	return store;
}

export default configure();