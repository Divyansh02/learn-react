import {combineReducers} from 'redux';
const songsReducer=()=>{
    return[
        {
            title:'The new song 1',
            duration:'2:41 sec'
        },
        {
            title:'The new song 2',
            duration:'2:42 sec'
        },
        {
            title:'The new song 3',
            duration:'2:43 sec'
        },
        {
            title:'The new song 4',
            duration:'2:44 sec'
        },
        {
            title:'The new song 5',
            duration:'2:45 sec'
        },
    ]
}

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})