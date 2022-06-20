import React from "react";

const CreateBuddy = (props) => {
    return(
        <div key={props.id} className={'col-md-3 buddieButton'}>
            <img src={props.displayIcon} alt={props.displayName}  width={128} height={128}/>
            <h3>{props.displayName}</h3>
        </div>
    )
}

export default CreateBuddy