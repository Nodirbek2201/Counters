import {useContext} from "react";
import {MyContext} from "../App";

function Title(){

    const contextValue = useContext(MyContext)
    return <div>
        <h1>Hello <span className={'btn btn-info'} style={{transform:'translateX(100px)'}}>{contextValue.length}</span></h1>
    </div>
}

export default Title