import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://localhost:3000',
//     headers: {
//         'Content-type': 'application/json',
//     },
// });
export default axios.create({
    baseURL:'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});