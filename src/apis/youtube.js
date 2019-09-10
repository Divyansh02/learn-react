import axios from 'axios';
const KEY='AIzaSyDAnZIeLeOrWp-2PRhb85DivujP_VTAOnc';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})