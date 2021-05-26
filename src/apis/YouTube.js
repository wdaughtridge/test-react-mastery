import axios from 'axios';

const KEY = 'AIzaSyAgfgEVnmpMVnyD8MtoQ-J3cvxurJbuopw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});