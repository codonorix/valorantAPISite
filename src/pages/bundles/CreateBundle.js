import React from "react";

const CreateBundle = (props) => {
    return(
        <div key={props.id} className={'bundleButton'}>
            <img src={props.displayIcon} alt={props.displayName} />
            <h3>{props.displayName}</h3>
        </div>
    )
}

export default CreateBundle