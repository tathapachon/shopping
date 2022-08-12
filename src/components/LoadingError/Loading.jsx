import React from "react";

const Loading= () =>{
    <div className="d-flez justify-content-center" >
        <div
             className="spinner-border text-succes"
             role="status"
             style={{width: "50px" , height: "50px"}}
        >
            <span className="sr-only">
                Loading...
            </span>
        </div>

    </div>
}

export default Loading