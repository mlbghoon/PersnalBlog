
import '../common/css/App.scss';

import { Provider } from 'react-redux';
import store from '../store';
import App from './Base/App';


const Root = () => (
  <Provider store={store}><App/></Provider> 
);

export default Root;
