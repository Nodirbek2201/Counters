import {MyContext} from "../../App";
import {useContext} from "react";

function ComponentB(){

    const contextValue = useContext(MyContext)

    function changeCounter(status) {
        if(status==='plus'){
            contextValue.counters.counter2=contextValue.counters.counter2+1
            let a = {...contextValue.counters}
            contextValue.setCounters(a)
        }else if(status==='minus'){
            contextValue.counters.counter2=contextValue.counters.counter2-1
            let a = {...contextValue.counters}
            contextValue.setCounters(a)
        }
    }

    return(
        <div className={'card text-center'}>
            <div className="card-header">
                <h6>B component</h6>
            </div>
            <div className="card-body">
                <p>count: <button className={'btn btn-outline-success mx-1'} onClick={()=>changeCounter('plus')}>+</button>
                    {contextValue.counters.counter2}<button className={'btn btn-outline-danger mx-1'} onClick={()=>changeCounter('minus')}>-</button></p>
            </div>
        </div>
    )
}

export default ComponentB