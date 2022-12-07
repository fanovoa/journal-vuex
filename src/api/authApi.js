import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyDA4hfc5JsAKEmMHevnTqdKdH1BhE69TMM'
    }
})


export default authApi