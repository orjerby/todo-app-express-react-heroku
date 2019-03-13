import axios from 'axios'

export default axios.create({
    baseURL: '/users',
    headers: {'Content-Type': 'application/json'}
})

// baseURL: 'http://localhost:3001/users',