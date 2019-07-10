
const axios = require('axios');
axios.defaults.headers = {"Content-type": 'application/json;charset=urf-8'};
const url = "http://api.juheapi.com/japi/toh?v=1&month=1&day=1&key=e5fef8b83ad02196da8b8079cf19dcec";
axios.get(url)
.then(res => {
    console.log(res.data);
})
.catch(err => {
    console.error(err); 
});


