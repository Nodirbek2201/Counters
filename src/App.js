import {createContext, useReducer} from "react";
import Title from "./Components/Title";
import AddTask from "./Components/AddTask";
import AllTasks from "./Components/AllTasks";

import 'bootstrap/dist/css/bootstrap.min.css'

export const MyContext = createContext()

function reducer(state,action){

    switch (action.type){
       case 'setTasks': return {...state, tasks:action.value}
        default:return state
    }

}

function App() {

    const [state, dispatch] = useReducer(reducer,{
        tasks:[
            {
                name:'Task 1',
                status:true
            }
        ]
    })

    function addNewTask(value) {
        let a = {
            name:value,
            status:false
        }
        state.tasks.push(a)
        dispatch({
            type:'setTasks',
            value:state.tasks
        })
    }

    function taskIsActive(index){
        let a = [...state.tasks]
        a[index].status = !a[index].status
        dispatch({
            type:'setTasks',
            value:a
        })
    }

    return (
        <MyContext.Provider  value={state.tasks}>
        <div className={'container'}>
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card text-center">
                        <div className="card-header">
                            <Title/>
                        </div>
                        <div className="card-body">
                            <AddTask addNewTask={addNewTask}/>
                            <AllTasks taskIsActive={taskIsActive}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </MyContext.Provider>
    )
}

export default App