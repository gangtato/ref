import UploadActionTypes from "../globalActionTypes";


let initialState:any = {
    stateUpload: "https://img2.pngio.com/default-image-png-picture-710222-default-image-png-default-png-265_265.png"
}

export default function reducer(state = initialState, action:any){
    switch(action.type){
        case UploadActionTypes.ADD_IMAGE:
            return{
                ...state,
                stateUpload: action.image
            }
        default:
            return state
    }
}