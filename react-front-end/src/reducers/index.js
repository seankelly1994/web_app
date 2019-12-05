import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import loadClientsReducer from './loadClientsReducer';
import clientsMetaDataReducer from './clientsMetaDataReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  loadClients: loadClientsReducer,
  clientsMetaData: clientsMetaDataReducer,
  login: loginReducer
});

export default rootReducer;

