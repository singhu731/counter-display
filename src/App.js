import React, { useState } from "react";

function App(){
    const [count, setCount] = useState(0);
    return (
    <div className="container m-5">
        <div className="card text-center m-5">
            <div style={{backgroundColor: "pink"}} className="card-body">
                <h1>Counter Display</h1>
                <div className='m-5'>
                    <h2 className="m-5">{count}</h2>
                    <button className="btn btn-success m-3" onClick={()=>setCount(count + 1)}>Increment</button>
                    <button className="btn btn-warning m-3" 
                    onClick={()=>setCount(count - 1)}
                    disabled={count === 0}>Decrement</button>
                    <button className="btn btn-danger m-3" onClick={()=>setCount(0)}
                    disabled={count === 0}>Reset</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;