import {createContext,useState} from "react";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import 'bootstrap/dist/css/bootstrap.min.css'


export const MyContext = createContext()

function App(){

    const [counters, setCounters] = useState({
        counter1:0,
        counter2:0,
        counter3:0,
        counter4:0
    })

  return(
      <MyContext.Provider value={{counters,setCounters}}>
      <div className={'container'}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h1 className={'text-center'}>Plus or Minus</h1>
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <FirstComponent/>
                                </div>
                                <div className="col-md-5">
                                    <SecondComponent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      </MyContext.Provider>
  )
}
export default App