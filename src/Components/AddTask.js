import {useState} from "react";

function AddTask(props){

const [input,setInput] = useState('')


    function addNewTask() {
        if(input)
        props.addNewTask(input)

        setInput(prev => prev='')
    }

    return <div className={'d-flex align-items-center justify-content-center p-2 bg-dark'}>
        <input placeholder={'Enter your task name'} type="text" value={input} onChange={(e)=>setInput(prev=>prev=e.target.value)} className={'form-control d-inline w-50 mr-2'}/>
        <button className={'btn btn-success'} onClick={addNewTask}>add</button>
    </div>
}

export default AddTask