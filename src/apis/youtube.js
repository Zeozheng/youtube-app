import axios from 'axios';

const KEY = 'AIzaSyDa2_RPW5424JB5btGhfHRXAxQw-DhSBns';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults : 5,
        key: KEY 
    }
});