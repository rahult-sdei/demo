const initialState={
    call:null
}

export const call_reducer = (state=initialState,action)=>{
    const {type,payload} =action
    switch(type){
        case "CALL_SUCCESS":
            return ({...state,call:payload})
        default: state;        
    }

}