import {useContext} from "react";
import {MyContext} from "../App";

function AllTasks(props) {

    const contextValue = useContext(MyContext)

    return <ul className={'list-group w-50 mt-3 mx-auto'}>
        {
            contextValue.map((item, index) => {
                return <h4 key={index} className={'list-group-item text-capitalize'}>{item.name}
                    <input type="checkbox"
                           style={{marginLeft: '10px', transform: 'scale(1.3)', cursor: 'pointer'}}
                           checked={item.status}
                           onChange={()=>props.taskIsActive(index)}/></h4>

            })
        }
    </ul>
}

export default AllTasks