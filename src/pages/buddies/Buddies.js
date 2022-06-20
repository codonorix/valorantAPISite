import React, {useEffect, useState} from "react";
import CreateBuddy from "./CreateBuddy";

import './buddies.css'

const ListBuddies = () => {
    const [buddies, setBuddies] = useState([])

    let buddiesList = []

    useEffect(() => {
        fetch('https://valorant-api.com/v1/buddies')
            .then(data => data.json())
            .then(dataJson => {
                let myData = dataJson['data']
                for(let i = 0; i < myData.length; i++) {
                    let curData = myData[i]
                    buddiesList.push(
                        <CreateBuddy
                            id={curData['uuid']}
                            displayIcon={curData['displayIcon']}
                            displayName={curData['displayName']}
                        />
                    )
                }
                setBuddies(buddiesList)
            })
    }, [])

    return(
        <div className={'container'}>
            <div className={'row'}>
                {
                    buddies.map(function (buddie, i){
                        return buddie
                    })
                }
            </div>
        </div>
    )
}

export default ListBuddies