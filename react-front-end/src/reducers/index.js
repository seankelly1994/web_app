import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import loadClientsReducer from './loadClientsReducer';
import clientsMetaDataReducer from './clientsMetaDataReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  loadClients: loadClientsReducer,
  clientsMetaData: clientsMetaDataReducer
});

export default rootReducer;

