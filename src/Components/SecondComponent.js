
import ComponentC from "./Contents/ComponentC";
import ComponentD from "./Contents/ComponentD";

function SecondComponent(){


    return <div className={'card'}>
        <div className="card-header">
            <h4 className={'text-center'}>2-component</h4>
        </div>
        <div className="card-body">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-3">
                    <ComponentC/>
                </div><div className="col-md-8 mt-3">
                <ComponentD/>
            </div>
            </div>
        </div>
    </div>

}

export default SecondComponent