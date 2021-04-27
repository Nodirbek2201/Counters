import ComponentA from "./Contents/ComponentA";
import ComponentB from "./Contents/ComponentB";
function FirstComponent(){


    return <div className={'card'}>
                <div className="card-header">
                    <h4 className={'text-center'}>1-component</h4>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-3">
                            <ComponentA/>
                        </div><div className="col-md-8 mt-3">
                            <ComponentB/>
                        </div>
                    </div>
                </div>
    </div>

}

export default FirstComponent