import axios from 'axios'
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID d476667185116a75cd5fd7ca75f441716ea277ef75938b61088822a5e923583d'
    }
})