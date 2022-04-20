
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducer';
import sagas from './saga';


export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();


  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(sagas);
  return {  store };
};
