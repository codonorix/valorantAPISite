import React, {useState, useEffect} from "react";
import {AgentCreator, AgentButton} from "./AgentCreator";

import './agents.css'
import AgentInfoCard from "./AgentInfoCard";
// import {Route} from "react-router-dom";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";


const Agents = () => {
    const [agents, setAgents] = useState([])

    /*
    UseEffect (AKA componentDidMount) is a system that allows us to make sure as part of the code is run before we reach
    the return statement. In this case we care using it to fetch the valorant API and return all the agents.

    Below after the closing function, the empty array tells react "Hey you only need to run once", if you have the empty
    array there it will stop it from creating an infinate loop and will only run once the component updates.

    Took me far too long to figure this out.
     */
    useEffect(() => {
        let allAgents = []

        fetch('https://valorant-api.com/v1/agents?$filter={isPlayableCharacter=true}')
            .then(result => {
                return result.json()
            })
            .then(data => {
                for (let i = 0; i < data['data'].length; i++) {

                    const listData = data['data'][i]
                    // console.log(listData)
                    if (listData['fullPortraitV2'] === null)
                        continue

                    allAgents.push(
                        <div className={'col-md-4 agentButton'} id={listData['uuid']} key={listData['uuid']}>

                            <Link to={`${listData['displayName']}`}>
                                <AgentButton
                                    key={listData['uuid']}
                                    src={listData['fullPortraitV2']}
                                    displayName={listData['displayName']}
                                />
                            </Link>

                            <Routes>
                                    <Route path={`${listData['displayName']}`}
                                           element={<AgentInfoCard uuid={listData['uuid']}/>}/>
                            </Routes>


                        </div>
                    )
                }
                setAgents(allAgents)
            })
    }, [])


    return (
        <div className={'container'}>
            <div className={'row'}>
                {
                    agents.map(function (agent, i) {
                        return agent
                    })
                }
            </div>
        </div>
    )
}

export default Agents