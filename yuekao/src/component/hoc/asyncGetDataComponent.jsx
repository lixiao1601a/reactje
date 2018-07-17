import React, { Component } from 'react'
import Store,{actions,GETLIST_C} from "../../redux/index"
import axios from "axios"

export default (Com,getDataHoc)=>{
    return class asyncComponent extends Component{
        constructor(props){
            super(props)
            this.state={
                Com:null,
                data:[]
            }
        }
        getDataComponent(obj){
            return new Promise((resolve,reject)=>{
                if(obj.type=="get"){
                    axios.get(obj.url).then((data)=>{
                        resolve(data.data)
                    }).catch((err)=>{
                        reject(err)
                    })
                }
            })
        }
       async componentWillMount(){
           var arr=[]
            for(var i=0;i<getDataHoc.length;i++){
                arr.push(await this.getDataComponent(getDataHoc[i]))
            }
            Store.dispatch(actions[GETLIST_C](arr[0]))
            this.setState({
                Com:Com,
                data:Store.getState().getList
            })
           
        }
        render(){
            return (<div>
                {this.state.Com?<Com {...this.props} getComHoc={this.state.data}/>:null}
            </div>)
        }
    }
}
