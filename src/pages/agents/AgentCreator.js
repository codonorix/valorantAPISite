import React from "react";
import AgentInfoCard from "./AgentInfoCard";

export const AgentCreator = (props) => {
    return (
        <div>
            <h1 id={props.key}></h1>
            <h1>Abilities</h1>
            <p>{props.ability1}</p>
            <p>{props.ability2}</p>
            <p>{props.ability3}</p>
            <p>{props.ult}</p>
        </div>
    )
}

export const AgentButton = (props) => {
    return (
            <div key={props.uuid}>
                <img src={props.src} alt={props.displayName} width={250} height={250}/>
                <h2>{props.displayName}</h2>
        </div>
    )
}