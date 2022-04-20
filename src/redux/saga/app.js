import { delay, put, takeLatest } from 'redux-saga/effects';


export default [takeLatest('CALL_API', logInAction)];



export function* logInAction({ data }) {
    console.log('saga worker')
    // yield delay(3000); // Simulate server delay
    // yield(put({type:'CALL_SUCCESS',payload:data}))
   
    }
  