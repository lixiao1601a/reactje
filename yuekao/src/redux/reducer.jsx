import initState from "./state"
import { GETLIST_C, ACTION_C ,ADD_C,REDUCE_C} from "./actions_types"

export default (state = initState, actions) => {
    const { type, text, indexId } = actions
    switch (type) {
        case GETLIST_C: {
            return Object.assign({}, state, { getList: text })
        }
        case ACTION_C: {
            let dataCom = text.map((val, index) => {
                if (index == indexId) {
                    val.flag=true
                    val.count=val.count+1
                }
                console.log(val.count)
                return val
            })
            return Object.assign({},state,{getList:dataCom})
        }
        case ADD_C:{
            let dataCom = text.map((val, index) => {
                if (index == indexId) {
                    val.count=++val.count
                }
                return val
            })
            return Object.assign({},state,{getList:dataCom})
        }
        case REDUCE_C:{
            let dataCom = text.map((val, index) => {
                if (index == indexId) {
                    val.count=--val.count
                    if(val.count<1){
                        val.flag=false
                    }
                }
                return val
            })
            return Object.assign({},state,{getList:dataCom})
        }
        default: {
            return state
        }
    }

}