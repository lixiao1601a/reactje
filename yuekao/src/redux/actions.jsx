import {
    GETLIST_C,
    ACTION_C,
    REDUCE_C,
    ADD_C
} from "./actions_types"

import axios from "axios"

export const actions= {
    [GETLIST_C](text){
        return{
            type:GETLIST_C,
            text:text
        }
    },
    [ACTION_C](text,index){
        return{
            type:ACTION_C,
            text:text,
            indexId:index
        }
    },
    [ADD_C](text,index){
        return{
            type:ADD_C,
            text:text,
            indexId:index
        }
    },
    [REDUCE_C](text,index){
        return{
            type:REDUCE_C,
            text:text,
            indexId:index
        }
    }
}