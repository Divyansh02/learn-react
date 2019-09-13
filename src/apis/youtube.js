import axios from 'axios';
const KEY="AIzaSyDAN_Bx2SyBxwLUvg1Fa-ZL59m5Kwmopy0";
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
})