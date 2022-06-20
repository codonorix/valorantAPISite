import React, {useState, useEffect} from "react";


const AgentInfoCard = (props) => {

    const [currentSelect, setCurrentSelect] = useState("")

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?$filter={isPlayableCharacter=true}')
            .then(result => {
                return result.json()
            })
            .then(data => {
                for (let i = 0; i < data['data'].length; i++) {

                    const listData = data['data'][i]

                    if (listData['fullPortraitV2'] === null)
                        continue

                    if (listData['uuid'] === props.uuid) {
                        setCurrentSelect(listData)
                        break
                    }

                }
            })
    }, [])

    return (
        <div className={'col-md-4'}>
            <h1>dwadawdwad</h1>
            <h1>dwadawdwad</h1>
            <h1>dwadawdwad</h1>
            <h1>dwadawdwad</h1>
            <h1>dwadawdwad</h1>
            <h1>dwadawdwad</h1>
            <h1>dwadawdwad</h1>

        </div>
    )
}

export default AgentInfoCard