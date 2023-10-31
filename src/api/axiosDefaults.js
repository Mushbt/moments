import axios from "axios";

axios.defaults.baseURL = 'https://task-manager-hbt-8627598f1957.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true