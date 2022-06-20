import React, {useEffect, useState} from "react";
import CreateBundle from "./CreateBundle";

import './bundle.css'

const Bundles = () => {
    const [bundles, setBundles] = useState([])

    let bundleList = []

    useEffect(() => {
        fetch('https://valorant-api.com/v1/bundles')
            .then(data => data.json())
            .then(dataJson => {
                let myData = dataJson['data']
                for(let i = 0; i < myData.length; i++) {
                    let curData = myData[i]
                    bundleList.push(
                        <div key={curData['uuid']}>
                            <CreateBundle
                                id={curData['uuid']}
                                displayIcon={curData['displayIcon']}
                                displayName={curData['displayName']}
                            />
                        </div>
                    )
                }
                setBundles(bundleList)
            })
    }, [])

    return(
        <div className={'container'}>
            <div className={'row'}>
                {
                    bundles.map(function (bundle, i){
                        return bundle
                    })
                }
            </div>
        </div>
    )
}

export default Bundles