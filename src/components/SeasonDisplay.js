import React from 'react'
import GetSeason from './GetSeason'
function SeasonDisplay(props) {
    const season=GetSeason(props.lat,new Date().getMonth());
    console.log(season)
    return (
        <div>
            Season Display:{props.lat}
        </div>
    )
}

export default SeasonDisplay
