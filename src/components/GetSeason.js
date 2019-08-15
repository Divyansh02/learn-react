import React from 'react'

function GetSeason(lat, month) {
    if(month>2 && month<9){
       return lat> 0 ? 'summer':'winter'
    }
    else{
       return lat>0 ? 'winter' : 'summer'
    }
    // return (
    //     <div>
            
    //     </div>
    // )
}

export default GetSeason
